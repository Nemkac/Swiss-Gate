import { IconDiamond, IconTransform, IconCashBanknote } from '@tabler/icons-react'

const services = [
  {
    icon: IconDiamond,
    title: 'Hidden Gems',
    description:
      'Identify properties with untapped potential through our sourcing network.',
  },
  {
    icon: IconTransform,
    title: 'Transform Completely',
    description:
      'Execute targeted renovations like structural upgrades, energy efficiency, modern layouts.',
  },
  {
    icon: IconCashBanknote,
    title: 'Maximum Profit',
    description:
      'Position for optimal resale, achieving 25-40% average ROI.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <h4 className="text-h4 text-neutral-1000">What We Do</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center gap-3 p-6"
                >
                  <Icon size={40} className="text-primary" />
                  <h6 className="text-h6 text-neutral-1000">{service.title}</h6>
                  <p className="text-p-md text-neutral-600 text-center text-pretty">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
