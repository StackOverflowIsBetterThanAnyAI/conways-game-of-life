import { useState } from 'react'

const Slider = () => {
    const [value, setValue] = useState(10)

    const visibleText = `${value} gen/s`
    const spokenText = `${value} generations per second`

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-4 flex-wrap justify-between text-base">
                <label htmlFor="slider" className="text-text text-lg">
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
                min={1}
                max={30}
                value={value}
                aria-valuetext={spokenText}
                onChange={(e) => setValue(Number(e.target.value))}
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
