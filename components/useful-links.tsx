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
    <section className="wrap section" aria-labelledby="useful-links-heading">
      <header className="section__head">
        <h2 id="useful-links-heading" className="section-title">
          Useful Links For All
        </h2>
      </header>
      <ul className="ledger">
        {links.map((link, index) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="ledger__num">§ {String(index + 1).padStart(2, "0")}</span>
              <span className="ledger__name">{link.label}</span>
              <span className="ledger__go">
                Open <span aria-hidden="true">↗</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
