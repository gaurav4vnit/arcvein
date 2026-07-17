import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#080B10" }}>
      <svg width="122" height="122" viewBox="0 0 64 64" fill="none">
        <path d="M7 54L25.75 13.5C27.15 10.45 29.1 8.75 31 8.35" stroke="#2563EB" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 8.35C34.9 8.75 36.85 10.45 38.25 13.5L57 54" stroke="#2563EB" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 54L28.25 26.1C29.15 24.15 30.35 23.05 31.25 22.7" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32.75 22.7C33.65 23.05 34.85 24.15 35.75 26.1L48.5 54" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 54L30.45 39.8C30.9 38.8 31.45 38.2 31.75 38.05" stroke="#7BAAF7" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32.25 38.05C32.55 38.2 33.1 38.8 33.55 39.8L40 54" stroke="#7BAAF7" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>,
    size,
  );
}
