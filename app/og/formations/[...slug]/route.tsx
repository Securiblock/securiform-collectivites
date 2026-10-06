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
          background: "radial-gradient(circle at 85% 20%, rgba(206,34,34,0.45), #1f262e 55%)",
          color: "#ffffff",
          borderBottom: "14px solid #ce2222",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>
            <span>SECURI</span>
            <span style={{ color: "#ce2222" }}>FORM</span>
          </div>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 8, color: "#c9cfd6" }}>COLLECTIVITÉS</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              marginBottom: 24,
              borderRadius: 999,
              border: "2px solid rgba(206,34,34,0.8)",
              background: "rgba(206,34,34,0.2)",
              color: "#ffd9d9",
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

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#d8dbe0" }}>
          <span>Formation sur site · Nord de la France</span>
          <span>securiform-collectivites.fr</span>
        </div>
      </div>
    ),
    size,
  );
}
