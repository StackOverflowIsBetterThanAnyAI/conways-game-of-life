type PrimaryButtonProps = {
    handleClick: () => void
    label: string
}

const PrimaryButton = ({ handleClick, label }: PrimaryButtonProps) => {
    return (
        <button
            className="text-sm sm:text-base text-center font-semibold bg-background-light outline-2 outline-border-light rounded-lg px-4 py-2 min-h-12 w-full
            focus-visible:outline-alive
            hover:bg-background-light-hover active:bg-background-light-active"
            onClick={handleClick}
            title={label}
        >
            {label}
        </button>
    )
}

export default PrimaryButton
