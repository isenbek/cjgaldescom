import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "MCP Service Catalog",
  description:
    "Campaign Brain service catalog — 22 FastAPI microservices with 85+ endpoints across AI, data, communication, infrastructure, and business operations.",
  alternates: { canonical: "/mcp" },
  openGraph: {
    title: "MCP Service Catalog | cjgaldes.com",
    description:
      "22 FastAPI microservices powering Campaign Brain — all accessible via MCP for LLM agents.",
    url: "https://cjgaldes.com/mcp",
  },
}

export default function McpLayout({ children }: { children: React.ReactNode }) {
  return children
}
