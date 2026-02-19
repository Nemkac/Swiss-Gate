import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '#/lib/utils'

const buttonVariants = cva(
    'flex flex-row gap-2 p-4 text-h6 items-center justify-center transition-[0.5s] cursor-pointer',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-neutral-25 hover:bg-primary-600 border-[1px] border-primary hover:border-primary-600',
                secondary: 'bg-white text-neutral-1000 hover:bg-neutral-100 border-[1px] border-neutral-25 hover:border-neutral-100',
                'outline-light': 'border-[1px] border-neutral text-neutral hover:bg-neutral-50',
                default: 'border-[1px] border-neutral-600 text-neutral-600 hover:bg-neutral-100',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

type Props = VariantProps<typeof buttonVariants> & {
    label: string
    icon?: React.ElementType
    iconPosition?: 'left' | 'right'
}

const Button = ({ variant, label, icon: Icon, iconPosition = 'left' }: Props) => {
    return (
        <button className={cn(buttonVariants({ variant }))}>
            {Icon && iconPosition === 'left' && <Icon size={20} />}
            {label}
            {Icon && iconPosition === 'right' && <Icon size={20} />}
        </button>
    )
}

export default Button
