import { createFileRoute } from '@tanstack/react-router'
import { PROJECTS } from '@/lib/data'
import RelatedProjects from '@/components/sections/RelatedProjects'
import WhatWeDo from '@/components/sections/WhatWeDo'

export const Route = createFileRoute('/projects/$projectId')({ component: ProjectDetail })

function ProjectDetail() {
  const { projectId } = Route.useParams()
  const project = PROJECTS.find((p) => p.id === projectId)

  if (!project) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 text-neutral-1000">Project not found</h1>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            <div className="h-96 bg-neutral-100 rounded-xl" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-h1 text-neutral-1000">{project.title}</h1>
                <p className="text-p-md text-neutral-600">{project.location}</p>
              </div>
              <div className="flex gap-8 p-6 bg-neutral-25 rounded-lg border border-neutral-200">
                <div className="flex flex-col gap-1">
                  <span className="text-p-xsm text-neutral-600 uppercase tracking-wide">ROI</span>
                  <span className="text-h3 text-primary">{project.roi}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-p-xsm text-neutral-600 uppercase tracking-wide">Status</span>
                  <span className="text-h3 text-neutral-1000 capitalize">{project.status}</span>
                </div>
              </div>
              {/* Project description and details go here */}
            </div>
          </div>
        </div>
      </section>
      <RelatedProjects currentProjectId={projectId} />
      <WhatWeDo />
    </>
  )
}
