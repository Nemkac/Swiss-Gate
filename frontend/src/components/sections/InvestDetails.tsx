import { IconMail, IconMapPinFilled, IconPhone } from "@tabler/icons-react";
import ContactCard from "../ContactCard";

export default function InvestDetails() {
  return (
    <section className="py-20 bg-neutral-25">
      <div className="max-w-6xl py-20 md:px-10 flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full text-center text-balance">
            <h2 className="text-h2 text-neutral-1000">Invest With Us</h2>
            <p className="text-p-md text-neutral-700">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full items-stretch gap-4">
            <ContactCard title='Zurich Office' subtitle='Klosbachstrasse 103, 8032 Zurich' icon={IconMapPinFilled} />
            <ContactCard title='Hergiswil Office' subtitle='Seestrasse 3, 6052 Hergiswil' icon={IconMapPinFilled} />
            <ContactCard title='+41 76 444 29 00' icon={IconPhone} />
            <ContactCard title='info@swissgate.ch' icon={IconMail} />
          </div>



        </div>
      </div>
    </section>
  )
}
