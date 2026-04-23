import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Pilot License Dashboard",
  description:
    "Real-time analytics of Claude AI usage — activity heatmaps, competency ratings, token economy, mission logs, and piloting style analysis.",
  alternates: { canonical: "/ai-pilot" },
  openGraph: {
    title: "AI Pilot License Dashboard | cjgaldes.com",
    description:
      "Real-time analytics of Claude AI usage — activity heatmaps, competency ratings, and piloting style.",
    url: "https://cjgaldes.com/ai-pilot",
  },
}

export default function AIPilotLayout({ children }: { children: React.ReactNode }) {
  return children
}
