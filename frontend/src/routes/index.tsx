import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/sections/Hero'
import Numbers from '@/components/sections/Numbers'
import OurWork from '@/components/sections/OurWork'
import WhatWeDo from '@/components/sections/WhatWeDo'
import FutureProjects from '@/components/sections/FutureProjects'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <OurWork />
      <WhatWeDo />
      <FutureProjects />
    </>
  )
}
