import { Hero } from "@/components/hero"
import { WhatItIs } from "@/components/what-it-is"
import { WhyItMatters } from "@/components/why-it-matters"
import { UsefulLinks } from "@/components/useful-links"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#0D0B12] text-white">
      <Hero />
      <WhatItIs />
      <WhyItMatters />
      <UsefulLinks />
      <SiteFooter />
    </main>
  )
}
