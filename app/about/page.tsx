import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "About CJ Galdes. Marketing and operations executive across political radio, hospitality, and media ventures. Director at RuralAMFM. Deputy Director at Strategic National.",
}

export default function AboutPage() {
  return (
    <main className="container-page min-h-[calc(100vh-4rem)] pt-28 pb-24">
      <article className="max-w-2xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-sf-steel">
          About
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-sf-white sm:text-5xl">
          Background
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-sf-white/85">
          <p>
            Most companies don&apos;t have a talent problem or a capital problem. They have a systems problem. The system they&apos;re running was designed for a different era and a different set of tools, and the people inside it are working around the system more than through it.
          </p>
          <p>
            My job is to find the real system underneath, and rebuild it so it runs without me in the room.
          </p>
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight text-sf-white">
          What I work on
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-relaxed text-sf-white/85">
          <p>
            <strong className="text-sf-white">Political radio.</strong> RuralAMFM is a rep agency that represents radio stations to political campaigns, PACs, and corporate advertisers. We specialize in rural, independent, and unrated markets. Stations that don&apos;t show up in the standard buys but reach the voters who actually decide elections. The business exists because there was a gap between where political money gets spent and where actual voters listen. We built the system that closes it.
          </p>
          <p>
            <strong className="text-sf-white">Caribbean hospitality.</strong> I operate a portfolio of resorts, restaurants, and bars on St. John in the U.S. Virgin Islands. The businesses are traditional. The way we run them isn&apos;t. Every property is wired into a shared stack of automation and AI workflows that lets a small team run what most groups need ten times the headcount to manage.
          </p>
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight text-sf-white">
          How I work
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-relaxed text-sf-white/85">
          <p>
            AI is the lever for me. Not as a gimmick, not as a talking point. As actual infrastructure. I&apos;ve rebuilt marketing, HR, finance, and operations workflows across the portfolio so AI handles the repeatable work and people handle judgment, relationships, and taste. The goal is never to replace operators. It&apos;s to give them leverage that didn&apos;t exist two years ago.
          </p>
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight text-sf-white">
          How I got here
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-relaxed text-sf-white/85">
          <p>
            I came up in Michigan politics. I ran political field operations across multiple states, including as Deputy State Director for the Trump campaign in Michigan during the 2016 cycle. From there I moved into political consulting, where I&apos;m still Deputy Director at <strong className="text-sf-white">Strategic National</strong>. Over time I expanded into operating businesses outside politics too, which is where most of my day to day work lives now.
          </p>
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight text-sf-white">
          Personal
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-relaxed text-sf-white/85">
          <p>
            I live in Michigan with my wife and our twin toddler boys. Most of my workday is spent making chaotic businesses predictable. The house is the one system I haven&apos;t cracked yet.
          </p>
        </div>
      </article>
    </main>
  )
}
