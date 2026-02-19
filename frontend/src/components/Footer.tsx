import { Link } from '@tanstack/react-router'
import ContactCard from './ContactCard'
import { IconMail, IconMapPinFilled, IconPhone } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-1000 py-12 flex flex-col w-full items-center">
      <div className="px-6 md:px-24 flex flex-col w-full items-center">
        <div className=" md:flex-row items-start justify-between gap-8 flex flex-col w-full">
          <div className="flex flex-col items-start gap-4">
            <img src="/assets/SwissGate-Inline-Light-Logo.svg" alt="Swiss Gate" className="h-6 w-auto" />
            <p className="text-p-md text-neutral-400 max-w-xs">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <span className="text-p-md text-white">Case studies</span>
            <Link to="/" className="text-p-md-link text-neutral-400 hover:text-primary underline">Lakehouse transformation</Link>
            <Link to="/projects" className="text-p-md-link text-neutral-400 hover:text-primary underline">Victorian Restoration</Link>
            <Link to="/invest" className="text-p-md-link text-neutral-400 hover:text-primary underline">Bungalow Transformation</Link>
          </nav>
          <div className="flex flex-col gap-3">
            <span className="text-p-md text-white">Contact us</span>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <ContactCard title='Zurich Office' subtitle='Klosbachstrasse 103, 8032 Zurich' icon={IconMapPinFilled} dark />
              <ContactCard title='+41 76 444 29 00' icon={IconPhone} dark />
              <ContactCard title='Hergiswil Office' subtitle='Seestrasse 3, 6052 Hergiswil' icon={IconMapPinFilled} dark />
              <ContactCard title='info@swissgate.ch' icon={IconMail} dark />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 flex w-full items-center justify-center text-center">
          <p className="text-p-sm text-white">© {new Date().getFullYear()} Swiss Gate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
