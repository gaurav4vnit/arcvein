import { ImageResponse } from "next/og";

export const alt =
  "ArcVein — Trading Infrastructure and Dedicated Engineering Teams";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#080b10",
          color: "#f3f5f7",
          padding: "72px 78px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Subtle engineering grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.08,
          }}
        >
          {[1, 2, 3, 4, 5].map((line) => (
            <div
              key={`vertical-${line}`}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${line * 16.666}%`,
                width: "1px",
                background: "#dce6f2",
              }}
            />
          ))}

          {[1, 2, 3].map((line) => (
            <div
              key={`horizontal-${line}`}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${line * 25}%`,
                height: "1px",
                background: "#dce6f2",
              }}
            />
          ))}
        </div>

        {/* Blue accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background: "#4387ff",
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <svg width="54" height="54" viewBox="0 0 64 64" fill="none">
                <path d="M7 54L25.75 13.5C27.15 10.45 29.1 8.75 31 8.35" stroke="#2563EB" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 8.35C34.9 8.75 36.85 10.45 38.25 13.5L57 54" stroke="#2563EB" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.5 54L28.25 26.1C29.15 24.15 30.35 23.05 31.25 22.7" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.75 22.7C33.65 23.05 34.85 24.15 35.75 26.1L48.5 54" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 54L30.45 39.8C30.9 38.8 31.45 38.2 31.75 38.05" stroke="#7BAAF7" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.25 38.05C32.55 38.2 33.1 38.8 33.55 39.8L40 54" stroke="#7BAAF7" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div
                style={{
                  display: "flex",
                  fontSize: "29px",
                  fontWeight: 700,
                  letterSpacing: "-0.8px",
                }}
              >
                ArcVein
              </div>
            </div>

            <div
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "10px 16px",
                fontSize: "16px",
                color: "#aeb8c5",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              Trading Technology
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "940px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "82px",
                lineHeight: 0.98,
                letterSpacing: "-4px",
                fontWeight: 700,
              }}
            >
              Trading Infrastructure.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "28px",
                maxWidth: "900px",
                fontSize: "28px",
                lineHeight: 1.4,
                color: "#aeb8c5",
              }}
            >
              Trading platforms, market data, exchange connectivity and
              dedicated engineering teams.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                fontSize: "17px",
                color: "#8f9aa8",
              }}
            >
              <span>Modern C++</span>
              <span>·</span>
              <span>Market Data</span>
              <span>·</span>
              <span>OMS & Risk</span>
              <span>·</span>
              <span>Engineering Teams</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                fontWeight: 700,
                color: "#dce6f2",
              }}
            >
              arcvein.com
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
