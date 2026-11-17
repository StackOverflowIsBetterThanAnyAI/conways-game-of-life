type InfoPanelProps = {
    generation: number
    liveCells: number
}

const InfoPanel = ({ generation, liveCells }: InfoPanelProps) => {
    return (
        <dl className="rounded-lg w-full grid grid-cols-[1fr_2px_1fr] py-4 bg-background-light col-start-1 row-start-1 row-span-2">
            <div className="flex flex-col gap-4 px-4">
                <dt className="uppercase text-sm sm:text-base">Generation</dt>
                <dd
                    role="status"
                    aria-live="polite"
                    className="text-2xl sm:text-3xl text-text"
                >
                    {generation}
                </dd>
            </div>
            <div aria-hidden="true" className="h-full w-0.5 bg-border" />
            <div className="flex flex-col gap-4 px-4">
                <dt className="uppercase text-sm sm:text-base">Live cells</dt>
                <dd
                    role="status"
                    aria-live="polite"
                    className="text-2xl sm:text-3xl text-background-secondary-button"
                >
                    {liveCells}
                </dd>
            </div>
        </dl>
    )
}

export default InfoPanel
