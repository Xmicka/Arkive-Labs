"use client";

import { useEffect, useRef } from "react";

/**
 * Signature hero: a flowing "liquid gold" field rendered with a GLSL
 * fragment shader (domain-warped fractal noise). Molten bronze/gold veins
 * drift through darkness and swell toward the cursor. This is bespoke —
 * not a stock particle system. Falls back to a static CSS gradient if
 * WebGL is unavailable or motion is reduced.
 */
const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;
  uniform float uIntro;
  varying vec2 vUv;

  float hash(vec2 p){
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i + vec2(1.,0.));
    float c = hash(i + vec2(0.,1.)), d = hash(i + vec2(1.,1.));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    float aspect = uRes.x / uRes.y;
    vec2 p = uv; p.x *= aspect;
    vec2 m = uMouse; m.x *= aspect;

    float t = uTime * 0.045;

    // domain warping — the molten flow
    vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 + vec2(5.2, 1.3) - t));
    vec2 r = vec2(
      fbm(p * 1.6 + 2.0 * q + vec2(1.7, 9.2) + 0.15 * t),
      fbm(p * 1.6 + 2.0 * q + vec2(8.3, 2.8) - 0.12 * t)
    );
    float f = fbm(p * 1.6 + 2.6 * r);

    // cursor swell (subtle)
    float md = distance(p, m);
    float glow = smoothstep(0.55, 0.0, md);
    f += glow * 0.10;
    f = clamp(f, 0.0, 1.0);

    // push most of the field into shadow — gold lives only at the crests
    f = pow(f, 2.6);

    // ink -> deep bronze -> gold ramp
    vec3 ink   = vec3(0.028, 0.032, 0.039);
    vec3 bronze= vec3(0.24, 0.17, 0.07);
    vec3 gold  = vec3(0.62, 0.49, 0.23);
    vec3 bright= vec3(0.85, 0.70, 0.39);

    vec3 col = ink;
    col = mix(col, bronze, smoothstep(0.18, 0.5, f));
    col = mix(col, gold,   smoothstep(0.5,  0.78, f) * 0.92);
    col = mix(col, bright, smoothstep(0.82, 1.0,  f) * 0.5);

    // thin filament veins at the very crests
    float vein = smoothstep(0.72, 0.74, f) - smoothstep(0.74, 0.82, f);
    col += bright * vein * 0.4;
    col += bright * glow * 0.03;

    // darken toward the copy side (left) for legibility
    col *= mix(0.22, 1.0, smoothstep(0.04, 0.86, uv.x));

    // vignette + overall restraint
    float vig = smoothstep(1.3, 0.42, length(uv - 0.5));
    col *= vig * 0.9;

    // intro fade-in
    col *= uIntro;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function HeroField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cleanup = () => {};

    (async () => {
      try {
        const { Renderer, Triangle, Program, Mesh, Vec2 } = await import("ogl");

        const renderer = new Renderer({
          dpr: Math.min(window.devicePixelRatio || 1, 2),
          alpha: false,
          antialias: false,
        });
        const gl = renderer.gl;
        gl.clearColor(0.031, 0.035, 0.043, 1);
        const canvas = gl.canvas as HTMLCanvasElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";
        host.appendChild(canvas);
        host.classList.add("is-webgl");

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
          vertex,
          fragment,
          uniforms: {
            uTime: { value: 0 },
            uMouse: { value: new Vec2(0.7, 0.5) },
            uRes: { value: new Vec2(1, 1) },
            uIntro: { value: 0 },
          },
        });
        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
          const w = host.clientWidth;
          const h = host.clientHeight;
          renderer.setSize(w, h);
          program.uniforms.uRes.value.set(
            gl.drawingBufferWidth,
            gl.drawingBufferHeight,
          );
        };
        resize();
        window.addEventListener("resize", resize);

        const target = new Vec2(0.7, 0.5);
        const onMove = (e: PointerEvent) => {
          target.set(
            e.clientX / window.innerWidth,
            1 - e.clientY / window.innerHeight,
          );
        };
        window.addEventListener("pointermove", onMove, { passive: true });

        let raf = 0;
        const start = performance.now();
        const speed = reduce ? 0.18 : 1;
        const render = (now: number) => {
          const elapsed = (now - start) / 1000;
          program.uniforms.uTime.value = elapsed * speed;
          // ease the cursor swell
          const m = program.uniforms.uMouse.value as InstanceType<typeof Vec2>;
          m.x += (target.x - m.x) * 0.05;
          m.y += (target.y - m.y) * 0.05;
          program.uniforms.uIntro.value = Math.min(1, elapsed / 1.1);
          renderer.render({ scene: mesh });
          raf = requestAnimationFrame(render);
        };
        raf = requestAnimationFrame(render);

        const onVisibility = () => {
          if (document.hidden) {
            cancelAnimationFrame(raf);
          } else {
            raf = requestAnimationFrame(render);
          }
        };
        document.addEventListener("visibilitychange", onVisibility);

        cleanup = () => {
          cancelAnimationFrame(raf);
          window.removeEventListener("resize", resize);
          window.removeEventListener("pointermove", onMove);
          document.removeEventListener("visibilitychange", onVisibility);
          const ext = gl.getExtension("WEBGL_lose_context");
          if (ext) ext.loseContext();
          if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        };
      } catch {
        // WebGL unavailable — CSS fallback gradient stays visible.
        host.classList.add("is-fallback");
      }
    })();

    return () => cleanup();
  }, []);

  return <div ref={ref} className="hero-field" aria-hidden="true" />;
}
