const Footer = () => {
    return (
        <footer className="mt-auto px-4 py-2 justify-center flex border-t-2 border-border">
            <div className="w-full max-w-7xl items-center justify-between flex text-sm text-pretty font-light">
                <span>B3/S23 John H. Conway, 1970</span>
                <section className="flex gap-4">
                    <span>
                        <span aria-hidden="true" className="font-bold">
                            Space
                        </span>
                        <span aria-hidden="true"> to start / pause</span>
                    </span>
                    <span aria-hidden="true" className="font-bold">
                        ·
                    </span>
                    <span aria-hidden="true">➔ to go step by step</span>
                    <span aria-hidden="true" className="font-bold">
                        ·
                    </span>
                    <span aria-hidden="true" className="first-letter:font-bold">
                        R to reset
                    </span>
                    <span aria-hidden="true" className="font-bold">
                        ·
                    </span>
                    <span aria-hidden="true" className="first-letter:font-bold">
                        C to clear board
                    </span>
                    <span className="sr-only">
                        Press Space to start and stop
                    </span>
                    <span className="sr-only">
                        Press right arrow to go step by step
                    </span>
                    <span className="sr-only">Press R to reset</span>
                    <span className="sr-only">Press C to clear the board</span>
                </section>
            </div>
        </footer>
    )
}

export default Footer
