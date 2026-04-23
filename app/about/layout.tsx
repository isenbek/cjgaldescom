import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bradley Isenbek — About",
  description:
    "Bradley Isenbek (Brad Isenbek, Bradley S. Isenbek) — AI Systems Architect and Frontier Technologist based in Grand Rapids, MI. 15+ years building systems at scale, from ESP32 mesh networks to Fortune 500 data warehouses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Bradley Isenbek — About",
    description:
      "Bradley Isenbek — AI Systems Architect. 15+ years building at the intersection of enterprise scale and maker culture.",
    url: "https://cjgaldes.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bradley Isenbek — About",
    description:
      "AI Systems Architect and Frontier Technologist based in Grand Rapids, MI.",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://cjgaldes.com/about",
            url: "https://cjgaldes.com/about",
            name: "About Bradley Isenbek",
            mainEntity: { "@id": "https://cjgaldes.com/#person" },
            isPartOf: { "@id": "https://cjgaldes.com/#website" },
            about: { "@id": "https://cjgaldes.com/#person" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://cjgaldes.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://cjgaldes.com/about",
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  )
}
