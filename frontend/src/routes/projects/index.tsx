import { createFileRoute } from '@tanstack/react-router'
import ProjectsList from '@/components/sections/ProjectsList'
import WhatWeDo from '@/components/sections/WhatWeDo'

export const Route = createFileRoute('/projects/')({ component: Projects })

function Projects() {
  return (
    <>
      <ProjectsList />
      <WhatWeDo />
    </>
  )
}
