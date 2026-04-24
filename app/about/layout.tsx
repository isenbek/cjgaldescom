import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "About CJ Galdes. Marketing and operations executive across political radio, hospitality, and media ventures. Director at RuralAMFM. Deputy Director at Strategic National.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | CJ Galdes",
    description:
      "CJ Galdes. Operator across political radio, hospitality, and media ventures. Director at RuralAMFM. Deputy Director at Strategic National.",
    url: "https://cjgaldes.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | CJ Galdes",
    description:
      "Operator across political radio, hospitality, and media ventures in the U.S. Virgin Islands.",
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
            name: "About CJ Galdes",
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
