import Button from '@/components/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden p-4">
      <img
        src="/assets/hero-background.svg"
        className="absolute inset-0 w-full h-full object-cover opacity-85 z-0"
      />
      <div className="flex flex-col w-full items-center justify-center z-1 max-w-2xl gap-6">
        <h2 className="text-h2 text-neutral-1000 text-balance text-center">
          We Turn Old Properties Into 25-40% ROI Deals
        </h2>
        <h6 className="text-h6 text-neutral-600 text-balance text-center">
          Swiss Gate acquires undervalued Swiss properties, executes smart renovations, and delivers outsized returns
          with 10+ years of real estate expertise.
        </h6>
        <div className="flex flex-col items-center justify-center md:flex-row gap-2">
          <Button label="Discuss Opportunities" />
          <Button variant="primary" label="View Portfolio" />
        </div>
      </div>
    </section>
  )
}
