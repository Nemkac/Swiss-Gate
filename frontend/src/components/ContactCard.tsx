type Props = {
    title: string,
    subtitle?: string,
    icon: React.ElementType,
    dark?: boolean
}

const ContactCard = ({ ...props }: Props) => {
    return (
        <div className={`flex flex-row px-3 py-2 items-center gap-3 ${props.dark ? 'bg-neutral-900' : 'bg-white'}`}>
            <props.icon size={24} className="text-primary shrink-0" />
            <div className='flex flex-col gap-1 min-w-0'>
                <p className={`'text-p-md' ${props.dark ? 'text-white' : 'text-neutral-1000'}`}>{props.title}</p>
                {props.subtitle && (
                    <p className={`'text-p-xsm' truncate ${props.dark ? 'text-neutral-400' : 'text-neutral-700'}`}>{props.subtitle}</p>
                )}
            </div>
        </div>
    )
}

export default ContactCard
