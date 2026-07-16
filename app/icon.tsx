import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "#080b10",
          color: "#f4f7fb",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            display: "flex",
            border: "3px solid rgba(255,255,255,0.22)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 12,
            display: "flex",
            background: "#4387ff",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 250,
            fontWeight: 700,
            letterSpacing: "-18px",
            transform: "translateX(-8px)",
          }}
        >
          A
        </div>
      </div>
    ),
    size,
  );
}
