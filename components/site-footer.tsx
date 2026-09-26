export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-white/50">Where to read more</p>
          <a
            href="https://www.deconstructingacademia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-lg font-semibold underline decoration-2 underline-offset-4 transition-colors"
            style={{ color: "#10D9D0" }}
          >
            www.deconstructingacademia.com
          </a>
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-white/50">Compiled by</p>
          <p className="mt-1 text-lg font-semibold text-white">Mabbit Rountree</p>
        </div>
      </div>

      <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
        Resource Central &mdash; a resource list for non-traditional, first-generation, and prison-to-higher-ed
        students.
      </p>
    </footer>
  )
}
