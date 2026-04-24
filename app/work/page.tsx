import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
  description:
    "CJ Galdes's current work: RuralAMFM, Strategic National, and a hospitality portfolio in the U.S. Virgin Islands.",
}

function WorkEntry({
  name,
  role,
  children,
}: {
  name: string
  role: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-sf-white">
        {name}
      </h2>
      <p className="mt-1 font-display text-sm uppercase tracking-[0.2em] text-sf-steel">
        {role}
      </p>
      <div className="mt-5 space-y-5 text-lg leading-relaxed text-sf-white/85">
        {children}
      </div>
    </section>
  )
}

export default function WorkPage() {
  return (
    <main className="container-page min-h-[calc(100vh-4rem)] pt-28 pb-24">
      <article className="max-w-2xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-sf-steel">
          Work
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-sf-white sm:text-5xl">
          What I&apos;m running
        </h1>

        <div className="mt-12">
          <WorkEntry name="RuralAMFM" role="Director">
            <p>
              A political radio agency representing stations across the country to campaigns, PACs, and corporate political advertisers. We specialize in rural, independent, and unrated markets. The stations that don&apos;t show up in the standard buys but reach voters who actually decide elections.
            </p>
            <p>
              The political ad industry built its apparatus around measured urban markets. The voters who decide close races often live outside them. RuralAMFM is built to close that gap.
            </p>
            <p>
              <a
                href="https://ruralamfm.com"
                className="underline decoration-sf-steel/60 underline-offset-4 hover:decoration-sf-white"
                style={{ color: "var(--brand-primary)" }}
              >
                ruralamfm.com
              </a>
            </p>
          </WorkEntry>

          <WorkEntry name="Strategic National" role="Deputy Director">
            <p>
              A political consulting firm working with campaigns and committees at the national and statewide level, along with political organizations and committees. My role is on the strategy and operations side of running those campaigns.
            </p>
          </WorkEntry>

          <WorkEntry name="Hospitality portfolio" role="Operator · U.S. Virgin Islands">
            <p>
              Multiple properties on St. John: resorts, restaurants, bars. My responsibility covers marketing, operations, systems architecture, financial oversight, and the AI and automation layer that ties the portfolio together.
            </p>
            <p>
              The idea isn&apos;t working people harder. It&apos;s rebuilding the workflows so the repeatable 80% is automated and the judgment work is where people actually spend their attention. A small team can run what most hospitality groups need ten times the headcount for.
            </p>
          </WorkEntry>
        </div>
      </article>
    </main>
  )
}
