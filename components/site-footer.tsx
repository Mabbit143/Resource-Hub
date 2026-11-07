const DA = "https://deconstructingacademia.com"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="splat splat--lime site-footer__splat" aria-hidden="true" />
      <div className="wrap site-footer__inner">
        <div>
          <p className="label">Where to read more</p>
          <a href={DA} className="site-footer__home">
            www.deconstructingacademia.com
          </a>
          <p className="label" style={{ marginTop: "1.25rem" }}>
            Compiled by
          </p>
          <p className="line">Mabbit Rountree</p>
        </div>

        <nav aria-label="Deconstructing Academia">
          <ul>
            <li><a href={`${DA}/articles/`}>Articles</a></li>
            <li><a href={`${DA}/resources/`}>Free resources</a></li>
            <li><a href={`${DA}/guides/`}>Meet your guides</a></li>
            <li><a href={`${DA}/free-syllabus-check/`}>Free syllabus check</a></li>
            <li><a href={`${DA}/free-log/`}>Free paper-trail log</a></li>
            <li><a href={`${DA}/tools/gpa-calculator.html`}>GPA Calculator</a></li>
            <li><a href={`${DA}/about/`}>About</a></li>
            <li><a href={`${DA}/contact/`}>Contact</a></li>
          </ul>
        </nav>

        <p className="fine-print">
          Resource Central &mdash; a resource list for non-traditional, first-generation, and prison-to-higher-ed
          students.
        </p>
      </div>
    </footer>
  )
}
