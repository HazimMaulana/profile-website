const projects = [
  {
    number: "01",
    type: "Branding / Web Design",
    title: "Ruang Tumbuh",
    description:
      "A digital identity for a community helping young people build better habits.",
    color: "bg-[#d5f36b]",
  },
  {
    number: "02",
    type: "Product Design / Development",
    title: "Nusa Finance",
    description:
      "A financial dashboard that makes complex data feel simple, clear, and easy to understand.",
    color: "bg-[#ffb7a5]",
  },
  {
    number: "03",
    type: "Creative Direction",
    title: "Sore Studio",
    description:
      "A warm and flexible visual system for a creative studio with many stories to tell.",
    color: "bg-[#b3c9ff]",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="text-xl font-black tracking-[-0.06em]">
          HM<span className="text-[#ff604d]">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 sm:flex">
          <a className="transition-colors hover:text-slate-950" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-slate-950" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-slate-950" href="#contact">
            Contact
          </a>
        </div>
        <a
          href="mailto:hello@hazim.dev"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s talk <span className="ml-1 text-[#d5f36b]">↗</span>
        </a>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
        <div>
          <p className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff604d]">
            <span className="h-2 w-2 rounded-full bg-[#ff604d]" />
            Designer & developer
          </p>
          <h1 className="max-w-3xl text-6xl font-black leading-[0.94] tracking-[-0.07em] text-slate-950 sm:text-8xl">
            Making digital feel{" "}
            <span className="relative inline-block text-[#ff604d]">
              human
              <span className="absolute -bottom-2 left-1 h-2 w-full -rotate-2 rounded-full bg-[#d5f36b] sm:-bottom-3" />
            </span>
            .
          </h1>
          <p className="mt-9 max-w-lg text-lg leading-8 text-slate-600">
            I&apos;m Hazim, a product designer and frontend developer who
            enjoys turning complex ideas into experiences that are simple,
            useful, and memorable.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-[#ff604d] px-6 py-3.5 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#111827]"
            >
              See my work <span className="ml-2">↓</span>
            </a>
            <span className="text-sm font-semibold text-slate-500">
              Based in Jakarta, working globally
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -right-3 -top-8 z-10 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-[#d5f36b] text-center text-xs font-black uppercase leading-4 text-slate-950 shadow-[4px_4px_0_#111827]">
            Open for
            <br />
            good work
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#ffb7a5] p-6">
            <div className="absolute inset-6 rounded-[1.5rem] border-2 border-dashed border-slate-950/30" />
            <div className="absolute bottom-10 left-10 right-10 h-48 rounded-[50%] bg-[#ff604d]" />
            <div className="absolute bottom-20 left-1/2 h-56 w-48 -translate-x-1/2 rounded-t-[8rem] bg-slate-950" />
            <div className="absolute bottom-32 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-[#d5a07c]" />
            <div className="absolute bottom-24 left-[39%] h-3 w-3 rounded-full bg-white" />
            <div className="absolute bottom-24 left-[57%] h-3 w-3 rounded-full bg-white" />
            <div className="absolute left-9 top-9 font-mono text-xs font-bold uppercase">
              Est. 2020 / HM
            </div>
            <div className="absolute bottom-9 right-9 text-right text-xs font-bold uppercase">
              Ideas
              <br />
              into impact
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-slate-950 px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#d5f36b]">
                Selected work
              </p>
              <h2 className="text-5xl font-black tracking-[-0.06em] sm:text-7xl">
                Selected
                <br />
                <span className="text-[#ff604d]">work.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              A selection of collaborations with great people and
              organizations that dare to move forward.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`${project.color} group min-h-[410px] rounded-[1.5rem] p-7 text-slate-950 transition-transform hover:-translate-y-2`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-bold">
                    / {project.number}
                  </span>
                  <span className="text-2xl transition-transform group-hover:rotate-45">
                    ↗
                  </span>
                </div>
                <div className="mt-36">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider opacity-60">
                    {project.type}
                  </p>
                  <h3 className="text-4xl font-black tracking-[-0.06em]">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-6 opacity-75">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff604d]">
            A little about me
          </p>
          <div>
            <p className="text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              I believe good design is not just about looking good, but about
              making someone&apos;s life a little easier.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              {["UI/UX Design", "Web Development", "Design Systems", "Motion"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#d5f36b] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
            Have an idea?
          </p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
            <h2 className="max-w-3xl text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-8xl">
              Let&apos;s make something meaningful.
            </h2>
            <a
              href="mailto:hello@hazim.dev"
              className="shrink-0 rounded-full bg-slate-950 px-6 py-4 font-bold text-white transition-transform hover:-translate-y-1"
            >
              hello@hazim.dev ↗
            </a>
          </div>
          <div className="mt-20 flex justify-between border-t border-slate-950/20 pt-5 text-xs font-bold uppercase tracking-wider text-slate-600">
            <span>© 2025 Hazim Maulana</span>
            <span>Built with Next.js + Tailwind</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
