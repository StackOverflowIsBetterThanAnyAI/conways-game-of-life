const InfoPanel = () => {
    return (
        <dl className="rounded-lg w-full grid grid-cols-[1fr_2px_1fr] py-4 bg-background-light">
            <div className="flex flex-col gap-4 px-4">
                <dt className="uppercase text-base">Generation</dt>
                <dd
                    role="status"
                    aria-live="polite"
                    className="text-3xl text-text"
                >
                    123
                </dd>
            </div>
            <div aria-hidden="true" className="h-full w-0.5 bg-border" />
            <div className="flex flex-col gap-4 px-4">
                <dt className="uppercase text-base">Live cells</dt>
                <dd
                    role="status"
                    aria-live="polite"
                    className="text-3xl text-background-secondary-button"
                >
                    234
                </dd>
            </div>
        </dl>
    )
}

export default InfoPanel
