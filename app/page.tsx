import { Hero } from "@/components/hero"
import { WhatItIs } from "@/components/what-it-is"
import { WhyItMatters } from "@/components/why-it-matters"
import { UsefulLinks } from "@/components/useful-links"

export default function Page() {
  return (
    <>
      <Hero />
      <WhatItIs />
      <WhyItMatters />
      <UsefulLinks />
    </>
  )
}
