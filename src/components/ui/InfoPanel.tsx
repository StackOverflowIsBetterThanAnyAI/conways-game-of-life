type InfoPanelProps = {
    generation: number
    liveCells: number
}

const InfoPanel = ({ generation, liveCells }: InfoPanelProps) => {
    return (
        <dl className="rounded-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:divide-x-2 divide-border px-2 py-4 bg-background-light col-start-1 row-start-1 row-span-2">
            <div className="flex sm:flex-col gap-4 px-4 max-sm:items-center max-sm:justify-between">
                <dt className="uppercase text-sm sm:text-base">Generation</dt>
                <dd
                    aria-live="polite"
                    className="text-2xl sm:text-3xl text-text"
                >
                    {generation}
                </dd>
            </div>
            <div className="flex sm:flex-col gap-4 px-4 max-sm:items-center max-sm:justify-between">
                <dt className="uppercase text-sm sm:text-base">Live cells</dt>
                <dd
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
