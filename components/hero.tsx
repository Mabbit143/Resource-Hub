export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#B7FF18" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#10D9D0" }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#B7FF18" }} />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Resource Central</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-6xl">
          Resources no one expects you to know about.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
          Resources for non-traditional students, first-generation students, and prison-to-higher-ed students &mdash;
          gathered in one place.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://www.deconstructingacademia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-[#0D0B12] transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#B7FF18" }}
          >
            Read more
          </a>
          <span className="text-sm text-white/50">deconstructingacademia.com</span>
        </div>
      </div>
    </header>
  )
}
