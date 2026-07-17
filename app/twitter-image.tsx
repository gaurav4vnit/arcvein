import { ImageResponse } from "next/og";

export const alt =
  "ArcVein — Trading Infrastructure and Dedicated Engineering Teams";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
              <svg width="58" height="52" viewBox="0 0 72 64" fill="none">
                <path d="M8 55 30.2 12.8c2.5-4.7 9.1-4.7 11.6 0L64 55" stroke="#2563EB" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 55 32.1 25.1c1.6-3.5 6.2-3.5 7.8 0L53.5 55" stroke="#4387FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29 55 34.3 38.7c.6-2 2.8-2 3.4 0L43 55" stroke="#8BB7FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
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
