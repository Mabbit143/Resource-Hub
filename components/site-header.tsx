const DA = "https://deconstructingacademia.com"

const nav = [
  { href: `${DA}/articles/`, label: "Articles" },
  { href: `${DA}/resources/`, label: "Free resources" },
  { href: `${DA}/guides/`, label: "Guides" },
  { href: `${DA}/tools/gpa-calculator.html`, label: "GPA Calculator" },
  { href: `${DA}/about/`, label: "About" },
  { href: DA, label: "Deconstructing Academia", cta: true },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href={DA} className="wordmark" aria-label="Deconstructing Academia — home">
          <img className="wordmark__badge" src="/images/da-logo.png" alt="" width={320} height={320} />
          <span className="wordmark__text">
            Deconstructing Academia
            <span className="wordmark__tag">Resource Central</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Deconstructing Academia">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={item.cta ? "nav-cta" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
