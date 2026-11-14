const Slider = () => {
    return (
        <>
            <span className="flex gap-4 flex-wrap justify-between text-base">
                <label htmlFor="slider" className="text-text">
                    Speed
                </label>
                <span
                    id="sliderdescription"
                    className="text-background-secondary-button"
                >
                    10 gen/s
                </span>
            </span>
            <input
                id="slider"
                aria-describedby="sliderdescription"
                type="range"
                min={1}
                max={30}
            />
            <span className="flex gap-4 justify-between text-sm">
                <span>1</span>
                <span>30</span>
            </span>
        </>
    )
}

export default Slider
