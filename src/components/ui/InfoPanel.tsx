const InfoPanel = () => {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="rounded-lg flex w-full justify-between p-4 bg-background-light"
        >
            <span className="flex flex-col gap-4">
                <div className="uppercase text-base">Generation</div>
                <div className="text-3xl text-text">123</div>
            </span>
            <span className="flex flex-col gap-4">
                <div className="uppercase text-base">Live cells</div>
                <div className="text-3xl text-background-secondary-button">
                    234
                </div>
            </span>
        </div>
    )
}

export default InfoPanel
