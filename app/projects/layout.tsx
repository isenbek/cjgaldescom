import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Projects",
  description:
    "Hardware, AI, data pipelines, distributed systems, and frontier research — all powered by intensive human-AI collaboration with Claude.",
  openGraph: {
    title: "Projects | cjgaldes.com",
    description:
      "Hardware, AI, data pipelines, distributed systems, and frontier research projects.",
    url: "https://cjgaldes.com/projects",
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
