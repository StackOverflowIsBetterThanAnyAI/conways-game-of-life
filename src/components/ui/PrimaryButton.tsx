type PrimaryButtonProps = { handleClick: () => void; label: string }

const PrimaryButton = ({ handleClick, label }: PrimaryButtonProps) => {
    return (
        <button
            className="text-base text-center font-semibold bg-background-light outline-2 outline-border rounded-lg px-4 py-2 min-h-12 w-full"
            onClick={handleClick}
            title={label}
        >
            {label}
        </button>
    )
}

export default PrimaryButton
