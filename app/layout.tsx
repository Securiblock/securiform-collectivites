import type { Metadata, Viewport } from "next";
import { Rajdhani, Quicksand } from "next/font/google";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.securiform-collectivites.fr"),
  title: {
    default: "Formations sécurité pour collectivités | SECURIFORM",
    template: "%s | SECURIFORM Collectivités",
  },
  description:
    "Organisme de formation sécurité dédié aux collectivités depuis 2008 : habilitation électrique, conduite R482 à R490, SST, incendie, travaux en hauteur, AIPR.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "SECURIFORM Collectivités",
    images: [
      {
        url: "/images/og-securiform-collectivites.jpg",
        width: 1200,
        height: 630,
        alt: "SECURIFORM Collectivités – Formations sécurité pour les agents territoriaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-securiform-collectivites.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#CE2222",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${rajdhani.variable} ${quicksand.variable}`}>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
