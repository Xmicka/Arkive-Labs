import { ImageResponse } from "next/og";

export const alt =
  "Arkive Labs — Marketing and technology, engineered as one.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 520px at 78% 8%, #2a200f 0%, #090a0c 60%)",
          padding: "72px 80px",
          color: "#f2f0e9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: "0.14em",
            }}
          >
            ARKIVE
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#8f8f89",
              paddingTop: 6,
            }}
          >
            LABS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Marketing and technology,
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#e0bd67",
            }}
          >
            engineered as one.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#9a9a92",
            letterSpacing: "0.04em",
          }}
        >
          <div style={{ display: "flex" }}>arkivelabs.com</div>
          <div style={{ display: "flex" }}>
            Founder-led studio · Sri Lanka &amp; worldwide
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
