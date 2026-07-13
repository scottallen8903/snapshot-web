import { ImageResponse } from "next/og";

export const alt = "SnapShot — AI video analysis for grassroots football";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F4F6FA 0%, #FFFFFF 100%)",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Green glow orb */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#00E676",
            opacity: 0.15,
            filter: "blur(80px)",
          }}
        />

        {/* Coming Soon pill */}
        <div
          style={{
            display: "flex",
            padding: "12px 28px",
            border: "2px solid #E2E8F0",
            borderRadius: 999,
            background: "#FFFFFF",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#475569",
            marginBottom: 40,
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#0F172A",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -2,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Every match.
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#00E676",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -2,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Auto-tracked.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#475569",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          AI video analysis for grassroots football coaches.
        </div>

        {/* SnapShot brand at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontSize: 28,
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          SnapShot
        </div>
      </div>
    ),
    { ...size }
  );
}