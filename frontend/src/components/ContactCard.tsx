type Props = {
    title: string,
    subtitle?: string,
    icon: React.ElementType,
    dark?: boolean
}

const ContactCard = ({ ...props }: Props) => {
    return (
        <div className={`flex flex-row px-3 py-2 items-center gap-3 h-full border border-transparent transition-[1s] ${props.dark ? 'bg-neutral-900 hover:border-primary-700' : 'bg-white hover:-translate-y-0.75 hover:shadow-md'}`}>
            <props.icon size={24} className="text-primary shrink-0" />
            <div className='flex flex-col min-w-0'>
                <p className={`'text-p-md' ${props.dark ? 'text-white' : 'text-neutral-1000'}`}>{props.title}</p>
                <p className={`'text-p-xsm' truncate ${props.subtitle ? '' : 'invisible'} ${props.dark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}

export default ContactCard
