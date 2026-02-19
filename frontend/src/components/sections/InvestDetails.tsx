import Button from '@/components/Button'

const steps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'Schedule a call with our team to discuss your investment goals and our current opportunities.',
  },
  {
    step: '02',
    title: 'Due Diligence',
    description:
      'Review detailed project financials, renovation plans, and market analysis for your chosen opportunity.',
  },
  {
    step: '03',
    title: 'Investment Agreement',
    description: 'Sign the investment agreement and complete the onboarding process.',
  },
  {
    step: '04',
    title: 'Returns',
    description: 'Receive regular project updates and your returns upon project completion.',
  },
]

export default function InvestDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-h1 text-neutral-1000">Invest With Us</h1>
            <p className="text-p-md text-neutral-600">
              Join a growing network of investors who trust Swiss Gate to deliver consistent, above-market returns
              through expertly managed Swiss real estate projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-neutral-25 rounded-xl border border-neutral-200">
            <div className="flex flex-col gap-2">
              <span className="text-p-sm text-neutral-600 uppercase tracking-wide">Minimum Investment</span>
              <span className="text-h2 text-primary">€50K</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-p-sm text-neutral-600 uppercase tracking-wide">Expected ROI</span>
              <span className="text-h2 text-primary">25–40%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-p-sm text-neutral-600 uppercase tracking-wide">Project Timeline</span>
              <span className="text-h2 text-primary">12–24 mo</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-h2 text-neutral-1000">How It Works</h2>
            <div className="flex flex-col gap-6">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <span className="text-h3 text-primary shrink-0 w-12">{item.step}</span>
                  <div className="flex flex-col gap-1 pt-1">
                    <h4 className="text-h5 text-neutral-1000">{item.title}</h4>
                    <p className="text-p-sm text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Button variant="primary" label="Schedule a Call" />
          </div>
        </div>
      </div>
    </section>
  )
}
