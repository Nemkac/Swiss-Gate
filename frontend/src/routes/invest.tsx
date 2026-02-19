import { createFileRoute } from '@tanstack/react-router'
import InvestDetails from '@/components/sections/InvestDetails'
import WhatWeDo from '@/components/sections/WhatWeDo'

export const Route = createFileRoute('/invest')({ component: InvestWithUs })

function InvestWithUs() {
  return (
    <>
      <InvestDetails />
      <WhatWeDo />
    </>
  )
}
