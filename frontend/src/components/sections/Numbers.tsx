const stats = [
  { value: '271 days', label: 'Return timeline' },
  { value: '$3.12.960', label: 'Total capital deployed' },
  { value: '29.45%', label: 'Average ROI on past projects' },
]

export default function Numbers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-center">
        <h4 className="text-h4 text-neutral-1000">Our Numbers</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <p className="text-p-md text-neutral-600">{stat.label}</p>
              <h4 className="text-h4 text-neutral-1000">{stat.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
