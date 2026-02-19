import ProjectCard from '@/components/ProjectCard'
import { PROJECTS } from '@/lib/data'

interface RelatedProjectsProps {
  currentProjectId: string
}

export default function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  const related = PROJECTS.filter((p) => p.id !== currentProjectId).slice(0, 2)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-h2 text-neutral-1000">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
