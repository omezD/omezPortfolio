import { ImageResponse } from "next/og";
import { site } from "@/content";

export const alt = site.title;
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
          padding: 72,
          color: "#e9e9ed",
          backgroundColor: "#161826",
          backgroundImage: "radial-gradient(circle at 85% 0%, #2b2741 0%, #161826 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "2px solid #9184d9",
              color: "#9184d9",
              fontSize: 26,
            }}
          >
            {site.initials}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d2cefd",
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 200, letterSpacing: -10, lineHeight: 0.9 }}>
          {site.name}
          <span style={{ color: "#9184d9" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#b2b6ca" }}>
          Java · Spring Boot · Spring AI · React · Angular
        </div>
      </div>
    ),
    size,
  );
}
