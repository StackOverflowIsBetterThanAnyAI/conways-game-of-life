type SecondaryButtonProps = {
    handleClick: () => void
    label: string
}

const SecondaryButton = ({ handleClick, label }: SecondaryButtonProps) => {
    return (
        <button
            className="text-sm sm:text-base text-center font-semibold bg-background-secondary-button text-secondary-button rounded-lg px-4 py-2 min-h-12 w-full
            focus-visible:outline-3 focus-visible:outline-border-light
            hover:bg-background-secondary-button-hover active:bg-background-secondary-button-active"
            onClick={handleClick}
            title={label}
        >
            {label}
        </button>
    )
}

export default SecondaryButton
