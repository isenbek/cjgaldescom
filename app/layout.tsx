import type { Metadata } from "next"
import { Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { RootLayoutWrapper } from "@/components/layout/RootLayoutWrapper"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "CJ Galdes — Operator",
    template: "%s | CJ Galdes",
  },
  description:
    "CJ Galdes. I build the operating systems behind companies that run on instinct. Political media and hospitality, with AI and automation as part of how they actually work.",
  metadataBase: new URL("https://cjgaldes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CJ Galdes — Operator",
    description:
      "I build the operating systems behind companies that run on instinct. Political media and hospitality, with AI and automation as part of how they actually work.",
    url: "https://cjgaldes.com",
    siteName: "CJ Galdes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CJ Galdes — Operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CJ Galdes — Operator",
    description:
      "I build the operating systems behind companies that run on instinct. Political media and hospitality, with AI and automation as part of how they actually work.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "CJ Galdes",
    "operator",
    "political radio",
    "RuralAMFM",
    "Strategic National",
    "rural radio advertising",
    "hospitality operations",
    "U.S. Virgin Islands",
    "St. John",
    "AI operations",
    "AI automation",
    "marketing operations",
  ],
  authors: [{ name: "CJ Galdes", url: "https://cjgaldes.com" }],
  creator: "CJ Galdes",
  publisher: "CJ Galdes",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover" as const,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://cjgaldes.com/#person",
                  name: "CJ Galdes",
                  givenName: "CJ",
                  familyName: "Galdes",
                  url: "https://cjgaldes.com",
                  mainEntityOfPage: "https://cjgaldes.com/about",
                  jobTitle: "Operator",
                  description:
                    "CJ Galdes. Operator across political media and hospitality. Director at RuralAMFM, Deputy Director at Strategic National, and operator of a hospitality portfolio in the U.S. Virgin Islands.",
                  knowsAbout: [
                    "Political radio",
                    "Political campaigns",
                    "Rural media",
                    "Hospitality operations",
                    "Business operations",
                    "AI operations",
                    "Workflow automation",
                  ],
                  knowsLanguage: ["en"],
                  nationality: { "@type": "Country", name: "United States" },
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "MI",
                    addressCountry: "US",
                  },
                  image: "https://cjgaldes.com/og-image.png",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cjgaldes.com/#website",
                  url: "https://cjgaldes.com",
                  name: "cjgaldes.com",
                  publisher: { "@id": "https://cjgaldes.com/#person" },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <RootLayoutWrapper>
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  )
}
