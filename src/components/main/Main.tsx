import { useEffect, useState } from 'react'
import { placePattern, type PatternId } from '../../patterns'
import {
    Canvas,
    Cell,
    InfoPanel,
    PrimaryButton,
    RulePanel,
    SecondaryButton,
    Slider,
    StartingPatterns,
} from '../ui'

const Main = () => {
    const [generation, setGeneration] = useState(0)
    const [liveCells, setLiveCells] = useState(0)
    const [patternId, setPatternId] = useState<PatternId>('r-pentomino')

    return (
        <main className="p-4 justify-center flex flex-1">
            <div className="w-full max-w-7xl flex flex-wrap gap-4 text-base">
                <div className="flex flex-1 flex-col w-full gap-4 p-4 rounded-lg outline-2 outline-border bg-background-light">
                    <section className="flex flex-col">
                        <h2 className="uppercase">The Board</h2>
                        <h3 className="uppercase text-xl text-text">
                            A handful of cells
                        </h3>
                    </section>
                    <Canvas />
                    <div className="flex justify-between items-center">
                        <span className="flex gap-4">
                            <span className="flex gap-2 items-center">
                                <Cell index={-1} isAlive={true} />
                                <span id="alive" className="text-text">
                                    Alive
                                </span>
                            </span>
                            <span className="flex gap-2 items-center">
                                <Cell index={-1} isAlive={false} />
                                <span id="dead" className="text-text">
                                    Dead
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-80">
                    <InfoPanel generation={generation} liveCells={liveCells} />
                    <SecondaryButton label="Start" handleClick={() => {}} />
                    <div className="flex gap-4">
                        <PrimaryButton label="Step" handleClick={() => {}} />
                        <PrimaryButton label="Reset" handleClick={() => {}} />
                    </div>
                    <Slider />
                    <StartingPatterns
                        patternId={patternId}
                        setPatternId={setPatternId}
                    />
                    <RulePanel />
                    <PrimaryButton label="Clear board" handleClick={() => {}} />
                </div>
            </div>
        </main>
    )
}

export default Main
