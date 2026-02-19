export interface Project {
  id: string
  title: string
  location: string
  roi: string
  status: 'completed' | 'ongoing' | 'upcoming'
  featured?: boolean
}

export const PROJECTS: Project[] = [
  { id: '1', title: 'Villa Renovation Zurich', location: 'Zurich, CH', roi: '38%', status: 'completed', featured: true },
  { id: '2', title: 'Apartment Block Basel', location: 'Basel, CH', roi: '29%', status: 'completed', featured: true },
  { id: '3', title: 'Commercial Space Geneva', location: 'Geneva, CH', roi: '34%', status: 'completed', featured: true },
  { id: '4', title: 'Heritage Villa Lucerne', location: 'Lucerne, CH', roi: '41%', status: 'completed' },
  { id: '5', title: 'Office Conversion Bern', location: 'Bern, CH', roi: '27%', status: 'ongoing' },
  { id: '6', title: 'Lakeside Apartments Zug', location: 'Zug, CH', roi: '36%', status: 'ongoing' },
]
