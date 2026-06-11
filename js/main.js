/* Arkive Labs — main.js
   Vanilla JS, no framework. Everything respects prefers-reduced-motion. */

(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fineCursor    = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initMobileMenu();
    initSmoothScroll();
    initServicesAccordion();
    initReveal();
    initCounters();
    initLocalTime();
    initFooterYear();
    initScrollProgress();
    initServiceHint();
    if (!reducedMotion) initHeroCanvas();
    if (!reducedMotion) initLenis();          // smooth scroll
    if (fineCursor)     initCursor();
    if (fineCursor && !reducedMotion) initMagnetic();
    if (fineCursor && !reducedMotion) initFounderTilt();
  });


  /* ═══════════════════════════════════════════════
     LENIS SMOOTH SCROLL
     Loaded dynamically as ESM so the main bundle stays small
     and Lenis is skipped entirely under reduced motion.
     ═══════════════════════════════════════════════ */
  async function initLenis() {
    try {
      const mod = await import('https://esm.sh/lenis@1.1.20');
      const Lenis = mod.default || mod.Lenis;
      const lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4
      });

      function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);

      /* Expose so anchor links can route through Lenis */
      window.__lenis = lenis;

      /* If GSAP ScrollTrigger is on the page (hero3d.js loads it), drive it from Lenis */
      lenis.on('scroll', () => {
        if (window.ScrollTrigger && window.ScrollTrigger.update) {
          window.ScrollTrigger.update();
        }
      });
    } catch (err) {
      /* Silent fallback to native scrolling. */
      console.warn('Lenis failed to load, using native scroll.', err);
    }
  }


  /* ═══════════════════════════════════════════════
     NAV — scroll state + active-section tracking
     ═══════════════════════════════════════════════ */
  function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ═══════════════════════════════════════════════
     MOBILE MENU
     ═══════════════════════════════════════════════ */
  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu   = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', () => {
      setOpen(!menu.classList.contains('is-open'));
    });

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

    /* Close on Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });
  }


  /* ═══════════════════════════════════════════════
     SMOOTH SCROLL (anchor links, nav-height aware)
     ═══════════════════════════════════════════════ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const nav = document.getElementById('nav');
        const offset = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset + 2;

        /* Route through Lenis when available for buttery scrolling.
           Falls back to native. */
        if (window.__lenis && window.__lenis.scrollTo) {
          window.__lenis.scrollTo(top, { duration: 1.4 });
        } else {
          window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
        }
        history.replaceState(null, '', id);
      });
    });
  }


  /* ═══════════════════════════════════════════════
     SCROLL PROGRESS — fills a thin gold rule on the left
     as the reader descends. Editorial book metaphor.
     ═══════════════════════════════════════════════ */
  function initScrollProgress() {
    const fill = document.getElementById('scrollProgressFill');
    if (!fill) return;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) : 0;
      fill.style.height = (p * 100).toFixed(2) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }


  /* ═══════════════════════════════════════════════
     SERVICE HINT — when the services section first scrolls
     into view, briefly pulse the first row's toggle so a
     new visitor understands the list is interactive.
     ═══════════════════════════════════════════════ */
  function initServiceHint() {
    if (reducedMotion) return;
    const first = document.querySelector('.service-row');
    const section = document.getElementById('services');
    if (!first || !section) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          first.classList.add('is-hint');
          /* Remove after the pulse so it doesn't repeat */
          setTimeout(() => first.classList.remove('is-hint'), 4000);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(section);
  }


  /* ═══════════════════════════════════════════════
     FOUNDER CARD TILT — subtle 3D perspective on cursor
     ═══════════════════════════════════════════════ */
  function initFounderTilt() {
    document.querySelectorAll('.founder').forEach(card => {
      let tx = 0, ty = 0, cx = 0, cy = 0;
      const max = 6; /* degrees */
      let raf = 0;

      const apply = () => {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        card.style.transform = `rotateY(${cx}deg) rotateX(${cy}deg)`;
        if (Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02) {
          raf = requestAnimationFrame(apply);
        } else {
          raf = 0;
        }
      };

      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width  - 0.5;
        const py = (e.clientY - r.top)  / r.height - 0.5;
        tx =  px * max;
        ty = -py * max;
        if (!raf) raf = requestAnimationFrame(apply);
      });
      card.addEventListener('pointerleave', () => {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(apply);
      });
    });
  }


  /* ═══════════════════════════════════════════════
     SERVICES ACCORDION
     One row open at a time. Smooth grid-template-rows transition.
     ═══════════════════════════════════════════════ */
  function initServicesAccordion() {
    const rows = document.querySelectorAll('[data-service]');
    if (!rows.length) return;

    rows.forEach(row => {
      const trigger = row.querySelector('.service-trigger');
      const detail  = row.querySelector('.service-detail');
      if (!trigger || !detail) return;

      trigger.addEventListener('click', () => {
        const wasOpen = row.classList.contains('is-open');

        /* Close all rows first. Visual hide happens via CSS grid-rows; we never
           toggle the `hidden` attribute because it disables the row transition. */
        rows.forEach(r => {
          r.classList.remove('is-open');
          const t = r.querySelector('.service-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
          row.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }


  /* ═══════════════════════════════════════════════
     REVEAL ON SCROLL (IntersectionObserver)
     We auto-tag major blocks so we don't need to author classes inline.
     ═══════════════════════════════════════════════ */
  function initReveal() {
    if (reducedMotion) return;

    const autoTargets = [
      '.section-head', '.manifesto-statement', '.manifesto-body',
      '.services-intro', '.service-row',
      '.approach-text', '.system-diagram', '.process-step',
      '.metric', '.work-item', '.about-intro',
      '.founder', '.values-head', '.value',
      '.contact-side', '.contact-form', '.cta-inner',
      '.footer-brand', '.footer-col'
    ];
    autoTargets.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }


  /* ═══════════════════════════════════════════════
     COUNTERS — animate metric values once visible
     ═══════════════════════════════════════════════ */
  function initCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length || reducedMotion) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        if (isNaN(target)) { io.unobserve(el); return; }

        let current = 0;
        const dur = 1200;
        const start = performance.now();

        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - p, 3);
          current = Math.round(target * eased);
          el.textContent = String(current);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(el => io.observe(el));
  }


  /* ═══════════════════════════════════════════════
     LOCAL TIME (Colombo, LK)
     ═══════════════════════════════════════════════ */
  function initLocalTime() {
    const el = document.getElementById('localTime');
    if (!el) return;

    const render = () => {
      try {
        const t = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit', minute: '2-digit', hour12: false,
          timeZone: 'Asia/Colombo'
        }).format(new Date());
        el.textContent = `${t} GMT+5:30`;
      } catch {
        el.textContent = 'GMT+5:30';
      }
    };
    render();
    setInterval(render, 30000);
  }


  /* ═══════════════════════════════════════════════
     FOOTER YEAR
     ═══════════════════════════════════════════════ */
  function initFooterYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }


  /* ═══════════════════════════════════════════════
     HERO CANVAS — drifting dot field, cursor-reactive
     ═══════════════════════════════════════════════ */
  function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    const mouse = { x: -9999, y: -9999, has: false };
    let dots = [];
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      // Grid-based dot field. Density scales with viewport area.
      const targetSpacing = 48; // px
      const cols = Math.ceil(w / targetSpacing) + 2;
      const rows = Math.ceil(h / targetSpacing) + 2;
      dots = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            ox: i * targetSpacing,
            oy: j * targetSpacing,
            x:  i * targetSpacing,
            y:  j * targetSpacing,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      const time = t * 0.0006;
      const radius = 180; // cursor influence radius

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k];
        // Idle drift — gentle sinusoidal float
        const driftX = Math.sin(time + d.phase) * 1.6;
        const driftY = Math.cos(time * 0.9 + d.phase) * 1.6;

        // Cursor displacement — repel from cursor with falloff
        let dx = d.ox + driftX;
        let dy = d.oy + driftY;

        if (mouse.has) {
          const vx = dx - mouse.x;
          const vy = dy - mouse.y;
          const dist = Math.hypot(vx, vy);
          if (dist < radius) {
            const f = (1 - dist / radius);
            const push = f * 36;
            const ang = Math.atan2(vy, vx);
            dx += Math.cos(ang) * push;
            dy += Math.sin(ang) * push;
          }
        }

        d.x += (dx - d.x) * 0.12;
        d.y += (dy - d.y) * 0.12;

        // Render — small dot. Gold near cursor, slate elsewhere.
        const distFromMouse = mouse.has ? Math.hypot(d.x - mouse.x, d.y - mouse.y) : Infinity;
        const near = distFromMouse < radius;

        const size = near ? 1.6 : 1.0;
        const alpha = near
          ? 0.18 + (1 - distFromMouse / radius) * 0.6
          : 0.22;

        ctx.beginPath();
        ctx.fillStyle = near
          ? `rgba(200, 184, 122, ${alpha})`
          : `rgba(176, 188, 212, ${alpha})`;
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.has = true;
    };
    const onLeave = () => { mouse.has = false; };

    // Throttled resize
    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(resize, 120);
    });

    canvas.addEventListener('pointermove', onMouse);
    canvas.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointermove', onMouse);

    /* Pause when the hero is off-screen to save battery */
    const hero = document.getElementById('hero');
    if ('IntersectionObserver' in window && hero) {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (!raf) raf = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }, { threshold: 0 });
      io.observe(hero);
    }

    resize();
    raf = requestAnimationFrame(draw);
  }


  /* ═══════════════════════════════════════════════
     CUSTOM CURSOR — desktop only
     ═══════════════════════════════════════════════ */
  function initCursor() {
    const el = document.getElementById('cursor');
    if (!el) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    let visible = false;

    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (!visible) { el.classList.add('is-active'); visible = true; }
    };

    const tick = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(tick);
    };

    document.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', () => {
      el.classList.remove('is-active');
      visible = false;
    });

    /* Hover affordance for interactive elements */
    const hoverable = 'a, button, [data-magnetic], input, textarea, select, .service-trigger';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(hoverable)) el.classList.add('is-hover');
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(hoverable)) el.classList.remove('is-hover');
    });

    tick();
  }


  /* ═══════════════════════════════════════════════
     MAGNETIC CTAs — subtle pull toward cursor
     ═══════════════════════════════════════════════ */
  function initMagnetic() {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = 0.25;

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const reset = () => { el.style.transform = ''; };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', reset);
    });
  }

})();
