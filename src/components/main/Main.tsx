import { useState } from 'react'
import type { PatternId } from '../../patterns'
import {
    Cell,
    InfoPanel,
    PrimaryButton,
    RadioButton,
    RulePanel,
    SecondaryButton,
    Slider,
} from '../ui'

const Main = () => {
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
                        <span>Click or drag to draw</span>
                        <span>Resize Button Placeholder</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-80">
                    <InfoPanel />
                    <SecondaryButton label="Start" handleClick={() => {}} />
                    <div className="flex gap-4">
                        <PrimaryButton label="Step" handleClick={() => {}} />
                        <PrimaryButton label="Reset" handleClick={() => {}} />
                    </div>
                    <Slider />
                    <section className="flex flex-col gap-2">
                        <h2 className="text-text text-lg">Starting patterns</h2>
                        <span className="text-text-muted">
                            Start over with a pattern
                        </span>
                        <fieldset className="flex flex-col gap-2">
                            <legend className="sr-only">
                                Starting patterns
                            </legend>
                            <RadioButton
                                id="r-pentomino"
                                name="R-Pentomino"
                                info="5 cells · chaotic"
                                isSelected={patternId === 'r-pentomino'}
                                onSelect={setPatternId}
                            />
                            <RadioButton
                                id="glider"
                                name="Glider"
                                info="5 cells · moving"
                                isSelected={patternId === 'glider'}
                                onSelect={setPatternId}
                            />
                            <RadioButton
                                id="pulsar"
                                name="Pulsar"
                                info="48 cells · oscillating"
                                isSelected={patternId === 'pulsar'}
                                onSelect={setPatternId}
                            />
                        </fieldset>
                    </section>
                    <RulePanel />
                    <PrimaryButton label="Clear board" handleClick={() => {}} />
                </div>
            </div>
        </main>
    )
}

export default Main
