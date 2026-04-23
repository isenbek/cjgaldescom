import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Lab",
  description:
    "Frontier experiments in hardware, AI, and creative computing. Boundary-pushing research projects that explore what's possible.",
  alternates: { canonical: "/lab" },
  openGraph: {
    title: "Research Lab | cjgaldes.com",
    description:
      "Frontier experiments in hardware, AI, and creative computing.",
    url: "https://cjgaldes.com/lab",
  },
}

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children
}
