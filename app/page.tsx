import type { Metadata } from "next";
import { Media } from "@/src/components/ui/Media";
import { HeroSlider, type HeroSliderSlide } from "@/src/components/home/HeroSlider";
import { About } from "@/src/components/home/About";
import { TrainingTiles } from "@/src/components/home/TrainingTiles";
import { TrainingsByService } from "@/src/components/home/TrainingsByService";
import { Commitments } from "@/src/components/home/Commitments";
import { CtaBand } from "@/src/components/home/CtaBand";
import { heroH1, heroSlides, siteConfig, courses } from "@/src/content/home";

const HERO_IMAGE_SIZES = "(max-width: 900px) 100vw, 50vw";

export const metadata: Metadata = {
  title: "Formations sécurité pour collectivités | SECURIFORM",
  description:
    "Organisme de formation sécurité dédié aux collectivités depuis 2008 : habilitation électrique, conduite R482 à R490, SST, incendie, travaux en hauteur, AIPR.",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    title: "SECURIFORM Collectivités – Formations sécurité des agents territoriaux",
    description:
      "Habilitation électrique, conduite en sécurité, SST, incendie, travaux en hauteur, AIPR et formations métiers pour les collectivités, partout en France.",
    url: "/",
    images: [
      {
        url: "/images/og-securiform-collectivites.jpg",
        width: 1200,
        height: 630,
        alt: "Agents territoriaux en formation sécurité avec SECURIFORM Collectivités",
      },
    ],
  },
};

function buildJsonLd() {
  const orgId = `${siteConfig.url}/#organisation`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": orgId,
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        description:
          "Département de SECURIFORM dédié à la formation sécurité des agents des collectivités locales et territoriales.",
        url: `${siteConfig.url}/`,
        logo: `${siteConfig.url}/images/logo-securiform-collectivites.png`,
        image: `${siteConfig.url}/images/og-securiform-collectivites.jpg`,
        foundingDate: siteConfig.foundingDate,
        telephone: "+33320673490",
        email: siteConfig.email,
        areaServed: { "@type": "Country", name: "France" },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          postalCode: siteConfig.address.postalCode,
          addressLocality: siteConfig.address.addressLocality,
          addressCountry: siteConfig.address.addressCountry,
        },
        parentOrganization: {
          "@type": "Organization",
          name: siteConfig.parentOrganization.name,
          url: siteConfig.parentOrganization.url,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+33320673490",
          email: siteConfig.email,
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: "French",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        inLanguage: "fr-FR",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: `${siteConfig.url}/`,
        name: "Formations sécurité pour collectivités | SECURIFORM",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": orgId },
        inLanguage: "fr-FR",
      },
      {
        "@type": "ItemList",
        name: "Formations sécurité pour les collectivités",
        itemListElement: courses.map((course) => ({
          "@type": "ListItem",
          position: course.position,
          item: {
            "@type": "Course",
            name: course.name,
            description: course.description,
            url: course.url,
            provider: { "@id": orgId },
          },
        })),
      },
    ],
  };
}

export default function HomePage() {
  const slides: HeroSliderSlide[] = heroSlides.map((slide, index) => ({
    id: slide.id,
    title: slide.title,
    description: slide.description,
    codesLabel: slide.codesLabel,
    codes: slide.codes,
    ctaLabel: slide.ctaLabel,
    ctaHref: slide.ctaHref,
    visual: (
      <Media
        src={slide.image.src}
        alt={slide.image.alt}
        sizes={HERO_IMAGE_SIZES}
        priority={index === 0}
      />
    ),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <HeroSlider heroH1={heroH1} slides={slides} />
      <About />
      <TrainingTiles />
      <TrainingsByService />
      <Commitments />
      <CtaBand />
    </>
  );
}
