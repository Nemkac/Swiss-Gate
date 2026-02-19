import { Link } from '@tanstack/react-router'
import type { Project } from '@/lib/data'

const statusConfig = {
  completed: { label: 'Completed', className: 'bg-green-100 text-green-700' },
  ongoing: { label: 'Ongoing', className: 'bg-blue-100 text-blue-700' },
  upcoming: { label: 'Upcoming', className: 'bg-neutral-100 text-neutral-600' },
}

export default function ProjectCard({ id, title, location, roi, status }: Project) {
  const statusStyle = statusConfig[status]

  return (
    <Link to="/projects/$projectId" params={{ projectId: id }}>
      <div className="flex flex-col bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
        <div className="h-48 bg-neutral-100" />
        <div className="flex flex-col gap-3 p-5">
          <span className={`self-start text-p-xsm px-2 py-1 rounded-full ${statusStyle.className}`}>
            {statusStyle.label}
          </span>
          <div className="flex flex-col gap-1">
            <h4 className="text-h5 text-neutral-1000">{title}</h4>
            <p className="text-p-sm text-neutral-600">{location}</p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
            <span className="text-p-sm text-neutral-600">ROI</span>
            <span className="text-h5 text-primary">{roi}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
