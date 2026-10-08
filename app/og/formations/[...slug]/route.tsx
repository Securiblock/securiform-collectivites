import { ImageResponse } from "next/og";
import { findFormationNode } from "@/src/content/formations-catalog";

// Image de partage (LinkedIn, Teams, WhatsApp…) de chaque formation et thématique.
// Servie à /og/formations/<chemin>/ et déclarée dans generateMetadata de app/formations/[...slug]/page.tsx
// (les images automatiques « opengraph-image » ne sont pas possibles sous une route catch-all).
const size = { width: 1200, height: 630 };

export async function GET(_request: Request, ctx: RouteContext<"/og/formations/[...slug]">) {
  const { slug } = await ctx.params;
  const result = findFormationNode(slug);
  const title = result?.node.title ?? "Formations sécurité";
  const parent = result && result.trail.length > 1 ? result.trail[result.trail.length - 2].title : null;
  const eyebrow = result?.node.kind === "category" ? "Thématique de formation" : (parent ?? "Formation");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 85% 15%, #2f6fd0 0%, #084699 45%, #052a5c 100%)",
          color: "#ffffff",
          borderBottom: "14px solid #a9ccff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>
            SECURIFORM
          </div>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 8, color: "#c9d8ee" }}>COLLECTIVITÉS</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              marginBottom: 24,
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.14)",
              color: "#ffffff",
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 54 : 68, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#dbe6f5" }}>
          <span>Formation sur site · Nord de la France</span>
          <span>securiform-collectivites.fr</span>
        </div>
      </div>
    ),
    size,
  );
}
