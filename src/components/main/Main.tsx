import { Cell, InfoPanel, PrimaryButton, SecondaryButton, Slider } from '../ui'

const Main = () => {
    return (
        <main className="p-4 justify-center flex">
            <div className="w-full max-w-7xl flex flex-wrap gap-4 text-base">
                <div className="flex flex-1 flex-col w-full gap-4 p-4 rounded-lg outline-2 outline-border bg-background-light">
                    <section className="flex flex-col">
                        <h2 className="uppercase">The Board</h2>
                        <h3 className="uppercase text-xl text-text">
                            A handful of cells
                        </h3>
                    </section>
                    <div className="flex justify-between items-center">
                        <span className="flex gap-4">
                            <div className="flex gap-2 items-center">
                                <Cell index={-1} isAlive={true} />
                                <span id="alive" className="text-text">
                                    Alive
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Cell index={-1} isAlive={false} />
                                <span id="dead" className="text-text">
                                    Dead
                                </span>
                            </div>
                        </span>
                        <span>Click or drag to draw</span>
                        <span>Resize Button Placeholder</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 min-w-80">
                    <InfoPanel />
                    <SecondaryButton label="Start" handleClick={() => {}} />
                    <div className="flex gap-4">
                        <PrimaryButton label="Step" handleClick={() => {}} />
                        <PrimaryButton label="Reset" handleClick={() => {}} />
                    </div>
                    <Slider />
                </div>
            </div>
        </main>
    )
}

export default Main
