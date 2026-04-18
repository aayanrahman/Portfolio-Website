import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Waterloo Protocol — Aayan Rahman",
  description: "A spatial and digital system for high-output learning and hardware design as an EE student.",
};

const tableData = [
  {
    location: "DC Silent Study",
    useCase: "The \"Grind\"",
    tasks: "Problem sets (ECE 106/140), intense practice problems.",
  },
  {
    location: "DP Silent Floor",
    useCase: "Deep Theory",
    tasks: "Reading textbooks, watching conceptual lectures, absorbing the first 95%.",
  },
  {
    location: "E7 / SYDE Lounges",
    useCase: "Engineer Vibes",
    tasks: "Altium, Vivado, ECE 124/108. Work where the energy matches the tools.",
  },
  {
    location: "Cafés (SLC/STC)",
    useCase: "Admin / Low-Cognitive",
    tasks: "Emails, co-op apps, cold outreach, research, and logistics.",
  },
  {
    location: "Dorm Workstation",
    useCase: "Heavy Hardware",
    tasks: "Complex Altium/Vivado design. Use the monitor only for multi-window engineering.",
  },
];

export default function WaterlooStudySpotsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <Link
          href="/about-me"
          className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] text-sm transition-colors"
        >
          <span aria-hidden>←</span>
          <span>Back</span>
          <span lang="ja" className="text-neutral-400 ml-1 text-xs">戻る</span>
        </Link>
      </div>

      <article className="space-y-8">
        {/* Header */}
        <header className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#BEE3D2]/40 text-[#1B5E40]">
              Productivity
            </span>
            <span className="text-[10px] text-neutral-400">Apr 2026</span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">
            The Waterloo Protocol: A Guide to Focused Engineering
          </h1>
          <p className="text-neutral-500 text-base leading-relaxed">
            Deep work isn&apos;t a feeling; it&apos;s a system of spatial and digital isolation. As an EE student,
            your bandwidth is expensive. Stop leaking it into &ldquo;fake&rdquo; study sessions and cluttered browser tabs.
          </p>
          <p className="text-sm text-neutral-400 italic">
            This is the protocol for high-output learning and hardware design.
          </p>
        </header>

        <hr className="border-[#E6E4DF]" />

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold tracking-tight">
            1. Spatial Selection: The Location Matrix
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Match the environment to the cognitive load. If you are in the wrong seat, you are wasting time.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#E6E4DF]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E6E4DF] bg-[#F9F8F6]">
                  <th className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Location</th>
                  <th className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Use Case</th>
                  <th className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Target Tasks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E4DF]">
                {tableData.map((row) => (
                  <tr key={row.location} className="bg-white">
                    <td className="px-4 py-3 font-medium text-neutral-800 whitespace-nowrap">{row.location}</td>
                    <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">{row.useCase}</td>
                    <td className="px-4 py-3 text-neutral-600">{row.tasks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-[#E6E4DF] bg-[#F9F8F6] px-4 py-3">
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-800">Rule:</span>{" "}
              Never mix. Do not check emails in DC. Do not read theory in a coffee shop.
              If you change tasks, change locations.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold tracking-tight">
            2. Digital &amp; Physical Hygiene
          </h2>
          <p className="text-neutral-600 leading-relaxed">Clutter is friction. Friction kills momentum.</p>
          <ul className="space-y-3">
            {[
              {
                label: "The Desktop Policy:",
                body: "Close every tab and application not currently in use. When a session ends, delete temp files, clear the desk, and pack the tech.",
              },
              {
                label: "The Bag Rule:",
                body: "Phone stays in the bag on DND. No exceptions.",
              },
              {
                label: "The Dorm Sanity Rule:",
                body: "The dorm is for sleep and high-level engineering only. If you are just \"browsing,\" move to the dining room or couch. Separate recreation from engineering spatially.",
              },
              {
                label: "The \"Exit\" Trigger:",
                body: "The moment you finish your To-Do list or hit a terminal \"stuck\" point, LEAVE. Do not hang out. Break the association between the study spot and stagnation.",
              },
            ].map(({ label, body }) => (
              <li key={label} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BEE3D2] shrink-0 mt-[7px]" />
                <span>
                  <span className="font-semibold text-neutral-800">{label}</span>{" "}
                  {body}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold tracking-tight">
            3. The Lecture Philosophy
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Attendance ≠ Learning. Your goal is understanding content, not a perfect attendance record.
          </p>
          <ul className="space-y-3">
            {[
              {
                label: "Pre-study or Bust:",
                body: "Use DP sessions to learn 95% of the content. Lectures are only for clarifying the final 5% you didn't understand.",
              },
              {
                label: "Be Selective:",
                body: "Only attend lectures where the prof discusses exam formats, specific focus areas, or complex nuances.",
              },
              {
                label: "The Post-Lecture Check:",
                body: "If you skip, ask a peer: \"Did they mention specific exam topics or formatting?\" Move on.",
              },
            ].map(({ label, body }) => (
              <li key={label} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BEE3D2] shrink-0 mt-[7px]" />
                <span>
                  <span className="font-semibold text-neutral-800">{label}</span>{" "}
                  {body}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold tracking-tight">
            4. The Anti-Group Study Manifesto
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Group study is usually social hour disguised as productivity.
          </p>
          <ul className="space-y-3">
            {[
              {
                label: "Work Solo:",
                body: "Real learning happens in the vacuum of your own focus.",
              },
              {
                label: "Cross-Reference Only:",
                body: "Use peers at the end of a session to check answers or clarify a specific diversion in the lecture.",
              },
              {
                label: "The Exit Strategy:",
                body: "If a group session turns into a hangout, leave immediately. \"No\" is a productivity tool.",
              },
            ].map(({ label, body }) => (
              <li key={label} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BEE3D2] shrink-0 mt-[7px]" />
                <span>
                  <span className="font-semibold text-neutral-800">{label}</span>{" "}
                  {body}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Summary */}
        <section className="rounded-xl border border-[#E6E4DF] bg-[#F9F8F6] p-5 space-y-3">
          <h2 className="font-serif text-lg font-bold tracking-tight">Summary: The Method</h2>
          <ol className="space-y-1.5">
            {[
              "Phone in bag / DND.",
              "Open exactly what you need; nothing else.",
              "Finish the task.",
              "Close everything / Clear the desk.",
              "Leave.",
            ].map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm text-neutral-700">
                <span className="text-[10px] text-neutral-300 w-4 shrink-0 text-right tabular-nums font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-[#E6E4DF]" />

        <footer className="text-center">
          <Link
            href="/about-me"
            className="inline-flex items-center gap-2 py-2 px-6 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] transition-colors text-sm"
          >
            <span aria-hidden>←</span>
            <span>Back to about</span>
            <span lang="ja" className="text-neutral-400 ml-1 text-xs">戻る</span>
          </Link>
        </footer>
      </article>
    </main>
  );
}
