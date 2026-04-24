import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Style Guide",
  description:
    "Design system reference for cjgaldes.com — theme tokens, typography, color palettes, and component patterns.",
  alternates: { canonical: "/style-guide" },
  robots: { index: false, follow: false },
}

export default function StyleGuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
