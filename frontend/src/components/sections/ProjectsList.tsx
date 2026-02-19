'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { PROJECTS } from '@/lib/data'

const PAGE_SIZE = 4

export default function ProjectsList() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(PROJECTS.length / PAGE_SIZE)
  const projects = PROJECTS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <section className="py-20 bg-neutral-25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-h1 text-neutral-1000">Our Projects</h1>
            <p className="text-p-md text-neutral-600 max-w-2xl">
              Explore our portfolio of successfully completed and ongoing Swiss property renovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-5 py-2 border border-neutral-200 rounded text-p-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <span className="text-p-sm text-neutral-600">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-5 py-2 border border-neutral-200 rounded text-p-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
