const links = [
  {
    label: "Best Textbook Resource Ever",
    href: "https://oceanofpdf.com",
  },
]

export function UsefulLinks() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h2 className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "#B7FF18" }}>
        Useful Links For All
      </h2>
      <ul className="mt-8 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-white/[0.06]"
            >
              <span
                className="block h-1 w-10 shrink-0 rounded-full transition-all group-hover:w-14"
                style={{ backgroundColor: "#10D9D0" }}
              />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
