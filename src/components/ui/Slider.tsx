type SliderProps = {
    generationsPerSecond: number
    setGenerationsPerSecond: React.Dispatch<React.SetStateAction<number>>
}

const Slider = ({
    generationsPerSecond,
    setGenerationsPerSecond,
}: SliderProps) => {
    const visibleText = `${generationsPerSecond} gen/s`
    const spokenText = `${generationsPerSecond} generations per second`

    const MIN = 1
    const MAX = 30
    const progress = ((generationsPerSecond - MIN) / (MAX - MIN)) * 100

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-4 flex-wrap justify-between text-sm sm:text-base">
                <label
                    htmlFor="slider"
                    className="text-text text-base sm:text-lg"
                >
                    Speed
                </label>

                <span
                    aria-hidden="true"
                    className="text-background-secondary-button"
                >
                    {visibleText}
                </span>
                <span className="sr-only">{spokenText}</span>
            </div>
            <input
                id="slider"
                type="range"
                min={MIN}
                max={MAX}
                value={generationsPerSecond}
                aria-valuetext={spokenText}
                onChange={(e) =>
                    setGenerationsPerSecond(Number(e.target.value))
                }
                style={{ '--progress': `${progress}%` } as React.CSSProperties}
                className="w-full"
            />
            <div
                aria-hidden="true"
                className="flex gap-4 justify-between text-sm"
            >
                <span>1</span>
                <span>30</span>
            </div>
        </div>
    )
}

export default Slider
