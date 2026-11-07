const links = [
  {
    label: "OpenStax: free, peer-reviewed college textbooks",
    href: "https://openstax.org/subjects",
  },
  {
    label: "LibreTexts: open textbooks for almost every subject",
    href: "https://libretexts.org",
  },
  {
    label: "Best Textbook Resource Ever",
    href: "https://oceanofpdf.com",
  },
  {
    label: "Open Textbook Library: 1,000+ reviewed open books",
    href: "https://open.umn.edu/opentextbooks",
  },
  {
    label: "Open Library: borrow ebooks free",
    href: "https://openlibrary.org",
  },
  {
    label: "Project Gutenberg: free public-domain classics",
    href: "https://www.gutenberg.org",
  },
  {
    label: "MERLOT: free course materials by discipline",
    href: "https://www.merlot.org",
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
