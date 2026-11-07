export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <span className="splat splat--violet hero__s1" aria-hidden="true" />
      <span className="splat splat--lime hero__s2" aria-hidden="true" />
      <span className="splat splat--cyan hero__s3" aria-hidden="true" />

      <div className="wrap hero__inner">
        <p className="eyebrow">Resource Central</p>

        <h1 id="hero-heading" className="strip-stack">
          <span className="strip strip--paper torn-lr">Resources no one</span>{" "}
          <span className="strip strip--paper torn-lr">expects you</span>{" "}
          <span className="strip strip--lime torn-lr">to know about.</span>
        </h1>

        <p className="hero__deck">
          Resources for non-traditional students, first-generation students, and prison-to-higher-ed students &mdash;
          gathered in one place.
        </p>

        <div className="hero__actions">
          <a href="https://deconstructingacademia.com" className="btn btn--lime">
            Read more
          </a>
          <a href="https://deconstructingacademia.com/resources/" className="btn btn--ghost">
            Free resources
          </a>
          <span className="hero__url">deconstructingacademia.com</span>
        </div>
      </div>
    </section>
  )
}
