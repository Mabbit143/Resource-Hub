const audiences = [
  {
    title: "First-generation students",
    accent: "#10D9D0",
    href: "https://deconstructingacademia.com/articles/reading-between-the-lines/",
    linkLabel: "Read: Reading Between the Lines",
  },
  {
    title: "Prison-to-higher-ed students",
    accent: "#B7FF18",
    href: "https://deconstructingacademia.com/articles/education-and-colonialism/",
    linkLabel: "Read: The Imaginary Student",
  },
]

export function WhatItIs() {
  return (
    <section className="wrap section" aria-labelledby="what-it-is-heading">
      <header className="section__head">
        <div>
          <p className="eyebrow">What it is</p>
          <h2 id="what-it-is-heading" className="section-title">
            A list of resources, compiled for students who don&apos;t always fit the traditional mold.
          </h2>
        </div>
      </header>

      <ul className="card-grid">
        {audiences.map((audience, i) => (
          <li key={audience.title} className="paper-card paper-surface torn-b">
            <span className={i % 2 ? "tape tape--right" : "tape"} aria-hidden="true" />
            <span className="paper-card__bar" style={{ backgroundColor: audience.accent }} aria-hidden="true" />
            <h3 className="paper-card__title">{audience.title}</h3>
            <a href={audience.href} className="btn paper-card__link">
              {audience.linkLabel}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
