import ProjectCard from '@/components/ProjectCard'
import { PROJECTS } from '@/lib/data'

const featured = PROJECTS.filter((p) => p.featured)

export default function OurWork() {
  return (
    <section className="py-20 bg-neutral-25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <h4 className="text-h4 text-neutral-1000">Our Work</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
