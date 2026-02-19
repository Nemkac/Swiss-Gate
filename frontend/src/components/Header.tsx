import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/projects' as const, label: 'Our Projects' },
  { to: '/invest' as const, label: 'Invest With Us' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border border-b-[0.5px] border-neutral-200 sticky top-0 z-50 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src='/assets/SwissGate-Inline-Dark-Logo.svg' alt='Swiss Gate' className='h-6 w-auto' />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-p-md hover:text-primary"
                activeProps={{ className: 'text-primary' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="max-w-7xl mx-auto p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-text-neutral-1000 hover:bg-primary hover:text-neutral-25 text-p-md transition-colors"
                activeProps={{
                  className:
                    'px-4 py-2 bg-primary text-neutral-25 text-p-md',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
