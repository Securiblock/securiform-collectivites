import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Simplified rendition of the brand shield (logo/LogoMark) for the Apple
// touch icon. ImageResponse only supports a flexbox CSS subset, so the exact
// clipped-shield path from the header logo can't be reused here.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#CE2222",
          borderRadius: 32,
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24">
          <path
            d="M6 11.5 10.2 16 18 7"
            fill="none"
            stroke="#fff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
