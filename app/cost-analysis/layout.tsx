import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Cost Analysis",
  description:
    "What does it cost to build software with AI? A data-driven comparison of legacy team development vs. AI-assisted solo engineering — using real project data from Campaign Brain.",
  alternates: { canonical: "/cost-analysis" },
  keywords: [
    "AI development cost",
    "software development ROI",
    "AI productivity",
    "Claude Code",
    "development velocity",
    "team vs solo developer",
    "AI-assisted engineering",
    "Campaign Brain",
  ],
  openGraph: {
    title: "Cost Analysis | cjgaldes.com",
    description:
      "Legacy team vs. AI-assisted solo dev — real numbers from 3 months of Campaign Brain development.",
    url: "https://cjgaldes.com/cost-analysis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Analysis | cjgaldes.com",
    description:
      "What a 9-person team costs $1.3M to build, one person + Claude ships in 46 days.",
  },
}

export default function CostAnalysisLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Real Cost of AI-Assisted Development",
            description:
              "Data-driven comparison of legacy team development vs. AI-assisted solo engineering using Campaign Brain project data.",
            url: "https://cjgaldes.com/cost-analysis",
            author: { "@id": "https://cjgaldes.com/#person" },
            publisher: { "@id": "https://cjgaldes.com/#person" },
            about: [
              { "@type": "Thing", name: "Software Development Economics" },
              { "@type": "Thing", name: "AI-Assisted Programming" },
              { "@type": "Thing", name: "Developer Productivity" },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
