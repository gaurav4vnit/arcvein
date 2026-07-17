import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#090B10", borderRadius: 36 }}>
      <svg width="112" height="100" viewBox="0 0 72 64" fill="none">
        <path d="M8 55 30.2 12.8c2.5-4.7 9.1-4.7 11.6 0L64 55" stroke="#2563EB" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 55 32.1 25.1c1.6-3.5 6.2-3.5 7.8 0L53.5 55" stroke="#4387FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 55 34.3 38.7c.6-2 2.8-2 3.4 0L43 55" stroke="#8BB7FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>,
    size,
  );
}
