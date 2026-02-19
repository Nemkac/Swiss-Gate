import Button from "../Button"

const futureProjects = [
  {
    title: 'Lakeside Complex Lucerne',
    description: "Nestled on the shores of Lake Geneva, this property was outdated and inefficient.",
    location: 'Lucerne, CH',
    expectedRoi: '35–42%',
    timeline: 'Q3 2025',
  },
  {
    title: 'Historic Building Bern',
    description: "Nestled on the shores of Lake Geneva, this property was outdated and inefficient.",
    location: 'Bern, CH',
    expectedRoi: '28–32%',
    timeline: 'Q1 2026',
  },
  {
    title: 'Historic Building Bern',
    description: "Nestled on the shores of Lake Geneva, this property was outdated and inefficient.",
    location: 'Bern, CH',
    expectedRoi: '28–32%',
    timeline: 'Q1 2026',
  },
]

export default function FutureProjects() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <h4 className="text-h4 text-white">Future Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {futureProjects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col justify-between gap-6 p-4 border border-neutral-700"
              >
                <div className="flex flex-col gap-2 text-pretty">
                  <h5 className="text-h5 text-white text-start">{project.title}</h5>
                  <p className="text-p-md text-neutral-300">{project.description}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-p-md text-neutral-400">Projected ROI</span>
                    <span className="text-h5 text-white">{project.expectedRoi}</span>
                  </div>
                  <Button label="Contact Us" variant="secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
