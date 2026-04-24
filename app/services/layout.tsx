import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Consulting Services",
  description:
    "Data engineering, distributed systems, AI/ML integration, and edge computing consulting. Project-based ($25K–$100K), hourly ($150–$275/hr), or retainer engagements.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Consulting Services | cjgaldes.com",
    description:
      "Data engineering, distributed systems, AI/ML integration, and edge computing consulting.",
    url: "https://cjgaldes.com/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
