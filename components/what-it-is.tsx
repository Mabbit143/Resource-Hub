const audiences = [
  {
    title: "First-generation students",
    accent: "#10D9D0",
  },
  {
    title: "Prison-to-higher-ed students",
    accent: "#B7FF18",
  },
]

export function WhatItIs() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h2 className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "#10D9D0" }}>
        What it is
      </h2>
      <p className="mt-4 text-2xl font-semibold leading-snug text-pretty sm:text-3xl">
        A list of resources, compiled for students who don&apos;t always fit the traditional mold.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {audiences.map((audience) => (
          <li
            key={audience.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
          >
            <span className="block h-1 w-10 rounded-full" style={{ backgroundColor: audience.accent }} />
            <span className="mt-4 block text-base font-medium leading-snug text-white">{audience.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
