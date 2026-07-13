import { ImageResponse } from "next/og";

export const alt = "SnapShot — match analysis from £10 a month. AI video for grassroots football coaches.";
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
          background: "#F4F6FA",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Top-right green glow orb */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#00E676",
            opacity: 0.25,
            filter: "blur(100px)",
          }}
        />

        {/* Bottom-left green glow orb */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#00E676",
            opacity: 0.15,
            filter: "blur(100px)",
          }}
        />

        {/* Coming Soon pill */}
        <div
          style={{
            display: "flex",
            padding: "14px 32px",
            border: "2px solid #E2E8F0",
            borderRadius: 999,
            background: "#FFFFFF",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 5,
            color: "#475569",
            marginBottom: 48,
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </div>

        {/* Headline line 1 */}
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: "#0F172A",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -3,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Match analysis.
        </div>

        {/* Headline line 2 with price highlight */}
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -3,
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          <span style={{ color: "#0F172A" }}>From&nbsp;</span>
          <span style={{ color: "#00E676" }}>£10 a month.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: "#475569",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          AI video for grassroots football coaches. One phone. Zero editing.
        </div>

        {/* Bottom brand anchor */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 60,
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: 10,
              textTransform: "uppercase",
            }}
          >
            SnapShot
          </div>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00E676",
            }}
          />
          <div
            style={{
              fontSize: 22,
              color: "#94A3B8",
              letterSpacing: 2,
            }}
          >
            snapshotsportscam.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}