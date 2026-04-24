import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content draft — cjgaldes.com",
  robots: { index: false, follow: false },
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 border-l-2 border-amber-500/60 bg-amber-50 px-4 py-2 font-sans text-sm leading-snug text-amber-900">
      <span className="mr-1 font-semibold">→</span>
      {children}
    </div>
  )
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
          <strong className="text-neutral-900">Content draft for review.</strong> Not live site content. Amber notes mark additions beyond your original draft. Read it top to bottom, flag anything that sounds off, and tell me what to change.
        </div>

        {/* HOME */}
        <section className="mb-20">
          <SectionTag label="HOME" />

          <h1 className="mb-8 font-sans text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            CJ Galdes
          </h1>

          <p className="mb-6 text-xl leading-[1.5] text-neutral-800 md:text-2xl">
            I find the operating systems underneath businesses that run on instinct, and I rebuild them so they run without me in the room.
          </p>

          <p className="mb-10 text-xl leading-[1.5] text-neutral-800 md:text-2xl">
            Political radio. Caribbean hospitality. Local media. Same method each time — with AI and automation as the actual infrastructure, not a talking point.
          </p>

          <h2 className="mb-4 mt-12 font-sans text-lg font-semibold tracking-tight text-neutral-900">
            What I do now
          </h2>

          <p>
            <strong>Right now:</strong> Director at <strong>RuralAMFM</strong> — a political radio agency connecting campaigns to rural and independent stations across the country. Deputy Director at <strong>Strategic National</strong>. Operator of a hospitality and media portfolio in the U.S. Virgin Islands.
          </p>

          <Note>
            Small change: framed as &ldquo;Right now&rdquo; (present-tense operator) rather than a résumé list. Tells peers what you&apos;re currently running.
          </Note>
        </section>

        {/* ABOUT */}
        <section className="mb-20">
          <SectionTag label="ABOUT" />

          <h2 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-neutral-900">
            Background
          </h2>

          <p className="mb-5">
            Most companies don&apos;t have a talent problem or a capital problem. They have a systems problem. The system they&apos;re running was designed for a different era, a different headcount, and a different set of tools — and everyone inside it is working around it more than through it.
          </p>

          <p className="mb-5">
            My job is to find the system underneath, and rebuild it so it runs without me in the room.
          </p>

          <Note>
            This is your &ldquo;pattern I keep coming back to&rdquo; paragraph, pulled from near the end of your draft and promoted to the opening. It&apos;s your thesis — it deserves the lead, not the footnote.
          </Note>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            Three industries, one method
          </h3>

          <p className="mb-5">
            <strong>Political radio.</strong> RuralAMFM is a rep agency that represents radio stations to political campaigns, PACs, and corporate advertisers. We specialize in rural, independent, and unrated markets — the stations that don&apos;t show up in the standard buys but reach the voters who actually decide elections. The business exists because there was a gap between where political money gets spent and where actual voters listen. We built the system that closes it.
          </p>

          <p className="mb-5">
            <strong>Caribbean hospitality.</strong> I operate a portfolio of resorts, restaurants, and bars on St. John, U.S. Virgin Islands. The businesses are traditional. The way we run them isn&apos;t. Every property is wired into a shared stack of automation and AI workflows that lets a small team run what most groups need ten times the headcount to manage.
          </p>

          <p className="mb-5">
            <strong>Local media.</strong> I operate an independent news publication covering St. John — ad-supported, widely read across the island and the broader USVI visitor community. Same pattern: traditional format, non-traditional operations underneath.
          </p>

          <Note>
            New framing: a &ldquo;three industries, one method&rdquo; section positions the portfolio as proof of the thesis, not as three separate jobs. The individual paragraphs are mostly your words, tightened.
          </Note>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            How I work
          </h3>

          <p className="mb-5">
            AI is the lever. Not as a gimmick, not as a talking point — as actual infrastructure. I&apos;ve rebuilt marketing, HR, finance, and operations workflows across the portfolio so AI handles the repeatable work and people handle judgment, relationships, and taste. The goal is never to replace operators. It&apos;s to give them leverage that didn&apos;t exist two years ago.
          </p>

          <Note>
            Nearly verbatim from your draft. Cut the duplicated &ldquo;pattern I keep coming back to&rdquo; paragraph since we moved it up to the opening.
          </Note>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            How I got here
          </h3>

          <p className="mb-5">
            I came up in Michigan politics. I ran political field operations across multiple states, including as Deputy State Director for the Trump campaign in Michigan during the 2016 cycle. From there I moved into political consulting — I&apos;m still Deputy Director at <strong>Strategic National</strong> — and eventually into operating businesses outside politics entirely. The pattern turned out to be the same in every setting.
          </p>

          <Note>
            Added the last sentence (&ldquo;the pattern turned out to be the same in every setting&rdquo;) to tie politics-to-operations back to the thesis. If you&apos;d rather not editorialize here, say so and I&apos;ll cut it.
          </Note>

          <h3 className="mb-4 mt-10 font-sans text-xl font-semibold tracking-tight text-neutral-900">
            Personal
          </h3>

          <p className="mb-5">
            I live in Michigan with my wife and our twin toddler boys. Most of my workday is spent making chaotic businesses predictable. The house is the one system I haven&apos;t cracked yet.
          </p>

          <Note>
            Your line, lightly tightened. Do not lose &ldquo;The house is the one system I haven&apos;t cracked yet.&rdquo; It&apos;s the best sentence on the page.
          </Note>
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
            A political radio agency representing stations across the country to campaigns, PACs, and corporate political advertisers. We specialize in rural, independent, and unrated markets — the stations that don&apos;t show up in standard agency buys but reach voters who actually decide elections.
          </p>
          <p className="mb-5">
            The thesis: the political ad industry built its apparatus around measured urban markets. The voters who decide close races live outside them. RuralAMFM is the inventory layer that closes the gap.
          </p>
          <p className="mb-5">
            <a href="https://ruralamfm.com" className="text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900">
              ruralamfm.com
            </a>
          </p>

          <Note>
            Added the &ldquo;thesis&rdquo; paragraph to make this a case study instead of a role description. Peers read case studies; they skim job listings.
          </Note>

          <h2 className="mt-12 mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            Strategic National
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Deputy Director
          </p>
          <p className="mb-5">
            Political consulting across campaigns, committees, and organizations.
          </p>
          <Note>
            Left intentionally short. If you want to expand with specific work, send me a couple of sentences and I&apos;ll fold it in.
          </Note>

          <h2 className="mt-12 mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            Hospitality portfolio
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Operator &middot; U.S. Virgin Islands
          </p>
          <p className="mb-5">
            Multiple properties on St. John: resorts, restaurants, bars. Responsibility spans marketing, operations, systems architecture, financial oversight, and the AI and automation layer that ties the portfolio together.
          </p>
          <p className="mb-5">
            The unlock isn&apos;t working people harder — it&apos;s rebuilding the workflows so the repeatable 80% is automated and the judgment 20% is where humans actually spend their attention. A small team runs what most hospitality groups would staff ten times heavier.
          </p>
          <Note>
            Second paragraph is new but it&apos;s a direct paraphrase of things you said in About. Kills the &ldquo;10×&rdquo; claim with the mechanism behind it — which is what peers want to see.
          </Note>

          <h2 className="mt-12 mb-2 font-sans text-2xl font-semibold tracking-tight text-neutral-900">
            Media ventures
          </h2>
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-neutral-500">
            Operator &middot; U.S. Virgin Islands
          </p>
          <p className="mb-5">
            An independent news publication covering St. John. Ad-supported, widely read across the island and the broader USVI visitor community.
          </p>
          <p className="mb-5">
            Local journalism is a traditional business run almost everywhere on instinct and long hours. This one isn&apos;t.
          </p>
          <Note>
            Last line is new — a tie-back to the thesis. Cut if too on-the-nose.
          </Note>
        </section>

        {/* Decisions */}
        <section className="mb-12 rounded-md border border-neutral-300 bg-neutral-50 p-6 font-sans">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-neutral-900">
            Three decisions I need before shipping
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-neutral-800">
            <li>
              <strong>Does the content read right?</strong> If any specific line sounds off, name it. If whole sections are wrong, name the section.
            </li>
            <li>
              <strong>Strategic National detail.</strong> Want to say anything more, or leave it short?
            </li>
            <li>
              <strong>The other pages.</strong> The site also has AI Pilot, Cost Analysis, Papers, Lab, MCP Catalog, and Projects — all Bradley&apos;s. Options:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>A.</strong> Hide them all for now. Ship the minimum: Home / About / Work / Contact.</li>
                <li><strong>B.</strong> Keep Projects (rename to Work), drop the rest.</li>
                <li><strong>C.</strong> Keep everything, reframe later.</li>
              </ul>
              <span className="mt-2 block text-neutral-600">Recommendation: <strong>A</strong>.</span>
            </li>
          </ol>
        </section>
      </div>
    </main>
  )
}
