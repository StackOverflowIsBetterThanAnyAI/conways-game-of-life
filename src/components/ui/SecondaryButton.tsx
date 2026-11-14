type SecondaryButtonProps = { handleClick: () => void; label: string }

const SecondaryButton = ({ handleClick, label }: SecondaryButtonProps) => {
    return (
        <button
            className="text-base text-center font-semibold bg-background-secondary-button text-secondary-button rounded-lg px-4 py-2 min-h-12 w-full"
            onClick={handleClick}
            title={label}
        >
            {label}
        </button>
    )
}

export default SecondaryButton
