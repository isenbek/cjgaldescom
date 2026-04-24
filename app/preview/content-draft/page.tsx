import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content draft — cjgaldes.com",
  robots: { index: false, follow: false },
}

function SectionTag({ label }: { label: string }) {
  return (
    <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
      {label}
    </p>
  )
}

export default function ContentDraftPreview() {
  return (
    <main
      className="min-h-screen bg-white text-neutral-900"
      style={{ fontFamily: 'Georgia, "Source Serif Pro", "Iowan Old Style", serif' }}
    >
      <div className="mx-auto max-w-[68ch] px-6 pb-16 pt-28 text-[17px] leading-[1.7]">
        <div className="mb-12 rounded-md border border-neutral-300 bg-neutral-50 px-5 py-4 font-sans text-sm leading-relaxed text-neutral-600">
          <strong className="text-neutral-900">Revised draft for review.</strong> Local media dropped from the elevator pitches (Home &ldquo;What I do now&rdquo; and About &ldquo;What I work on&rdquo;); it now lives only in the Work section as the last and shortest entry. The bolt-on feeling is gone.
        </div>

        {/* HOME */}
        <section className="mb-20">
          <SectionTag label="HOME" />

          <h1 className="mb-8 font-sans text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            CJ Galdes
          </h1>

          <p className="mb-6 text-xl leading-[1.5] text-neutral-800 md:text-2xl">
            I build the operating systems behind companies that run on instinct. Mostly political media and hospitality. The industries are different, but the work is the same: find the real system underneath, and build the infrastructure that makes it run without me in the room.
          </p>

          <p className="mb-10 text-xl leading-[1.5] text-neutral-800 md:text-2xl">
            AI and automation are part of how that actually happens.
          </p>

          <h2 className="mb-4 mt-12 font-sans text-lg font-semibold tracking-tight text-neutral-900">
            What I do now
          </h2>

          <p>
            Director at <strong>RuralAMFM</strong>, a political radio agency connecting campaigns to rural and independent stations across the country. Deputy Director at <strong>Strategic National</strong>, where I help run national and statewide campaigns. Operator of a hospitality portfolio in the U.S. Virgin Islands.
          </p>
        </section>

        {/* ABOUT */}
        <section className="mb-20">
          <SectionTag label="ABOUT" />

          <h2 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-neutral-900">
            Background
          </h2>

          <p className="mb-5">
            Most companies don&apos;t have a talent problem or a capital problem. They have a systems problem. The system they&apos;re running was designed for a different era and a different set of tools, and the people inside it are working around the system more than through it.
          </p>

          <p className="mb-5">
            My job is to find the real system underneath, and rebuild it so it runs without me in the room.
          </p>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            What I work on
          </h3>

          <p className="mb-5">
            <strong>Political radio.</strong> RuralAMFM is a rep agency that represents radio stations to political campaigns, PACs, and corporate advertisers. We specialize in rural, independent, and unrated markets. Stations that don&apos;t show up in the standard buys but reach the voters who actually decide elections. The business exists because there was a gap between where political money gets spent and where actual voters listen. We built the system that closes it.
          </p>

          <p className="mb-5">
            <strong>Caribbean hospitality.</strong> I operate a portfolio of resorts, restaurants, and bars on St. John in the U.S. Virgin Islands. The businesses are traditional. The way we run them isn&apos;t. Every property is wired into a shared stack of automation and AI workflows that lets a small team run what most groups need ten times the headcount to manage.
          </p>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            How I work
          </h3>

          <p className="mb-5">
            AI is the lever for me. Not as a gimmick, not as a talking point. As actual infrastructure. I&apos;ve rebuilt marketing, HR, finance, and operations workflows across the portfolio so AI handles the repeatable work and people handle judgment, relationships, and taste. The goal is never to replace operators. It&apos;s to give them leverage that didn&apos;t exist two years ago.
          </p>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            How I got here
          </h3>

          <p className="mb-5">
            I came up in Michigan politics. I ran political field operations across multiple states, including as Deputy State Director for the Trump campaign in Michigan during the 2016 cycle. From there I moved into political consulting, where I&apos;m still Deputy Director at <strong>Strategic National</strong>. Over time I expanded into operating businesses outside politics too, which is where most of my day to day work lives now.
          </p>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            Personal
          </h3>

          <p className="mb-5">
            I live in Michigan with my wife and our twin toddler boys. Most of my workday is spent making chaotic businesses predictable. The house is the one system I haven&apos;t cracked yet.
          </p>
        </section>

        {/* WORK */}
        <section className="mb-20">
          <SectionTag label="WORK" />

          <h2 className="mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            RuralAMFM
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Director
          </p>
          <p className="mb-5">
            A political radio agency representing stations across the country to campaigns, PACs, and corporate political advertisers. We specialize in rural, independent, and unrated markets. The stations that don&apos;t show up in the standard buys but reach voters who actually decide elections.
          </p>
          <p className="mb-5">
            The political ad industry built its apparatus around measured urban markets. The voters who decide close races often live outside them. RuralAMFM is built to close that gap.
          </p>
          <p className="mb-5">
            <a href="https://ruralamfm.com" className="text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900">
              ruralamfm.com
            </a>
          </p>

          <h2 className="mt-12 mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            Strategic National
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Deputy Director
          </p>
          <p className="mb-5">
            A political consulting firm working with campaigns and committees at the national and statewide level, along with political organizations and committees. My role is on the strategy and operations side of running those campaigns.
          </p>

          <h2 className="mt-12 mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            Hospitality portfolio
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Operator &middot; U.S. Virgin Islands
          </p>
          <p className="mb-5">
            Multiple properties on St. John: resorts, restaurants, bars. My responsibility covers marketing, operations, systems architecture, financial oversight, and the AI and automation layer that ties the portfolio together.
          </p>
          <p className="mb-5">
            The idea isn&apos;t working people harder. It&apos;s rebuilding the workflows so the repeatable 80% is automated and the judgment work is where people actually spend their attention. A small team can run what most hospitality groups need ten times the headcount for.
          </p>

          <h2 className="mt-12 mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            Media ventures
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Operator &middot; U.S. Virgin Islands
          </p>
          <p className="mb-5">
            An independent ad-supported news publication covering St. John, with readership on the island and among visitors across the USVI.
          </p>
        </section>

        {/* Decisions */}
        <section className="mb-12 rounded-md border border-neutral-300 bg-neutral-50 p-6 font-sans">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-neutral-900">
            Still need from you
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-neutral-800">
            <li>
              <strong>Does the copy read right now?</strong> Flag anything that still sounds off or AI-toned.
            </li>
            <li>
              <strong>Strategic National.</strong> Does the expanded description land, or do you want more detail on specific kinds of work?
            </li>
            <li>
              <strong>Sign off to ship.</strong> Once approved, I&apos;ll swap this into the live pages, hide AI Pilot / Cost Analysis / Papers / Lab / MCP Catalog / Projects from the nav, and remove the &ldquo;bradley.io&rdquo; framing that&apos;s still scattered across the site metadata.
            </li>
          </ol>
        </section>
      </div>
    </main>
  )
}
