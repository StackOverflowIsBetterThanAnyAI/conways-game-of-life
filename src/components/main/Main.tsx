import { useState } from 'react'
import { resizeCells, type Board } from '../../grid'
import { createStartingCells, type PatternId } from '../../patterns'
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
    const [patternId, setPatternId] = useState<PatternId>('r-pentomino')
    const [board, setBoard] = useState<Board>({
        rows: 0,
        columns: 0,
        cells: [],
    })

    const [randomStart, setRandomStart] = useState<{
        cells: boolean[]
        columns: number
    } | null>(null)

    const liveCells = board.cells.filter(Boolean).length

    const hasStarted = !!generation

    const loadPattern = (id: PatternId) => {
        const cells = createStartingCells(id, board.rows, board.columns)
        setPatternId(id)
        setGeneration(0)
        setBoard({ ...board, cells })
        if (id === 'random') {
            setRandomStart({ cells, columns: board.columns })
        }
    }

    const reselectPattern = (id: PatternId) => {
        if (id === 'random' && !hasStarted) {
            loadPattern('random')
        }
    }

    const clearBoard = () => {
        loadPattern(patternId)
    }

    const getStartCells = (rows: number, columns: number) =>
        patternId === 'random' && randomStart
            ? resizeCells(randomStart.cells, randomStart.columns, rows, columns)
            : createStartingCells(patternId, rows, columns)

    const resetBoard = () => {
        setGeneration(0)
        setBoard({
            ...board,
            cells: getStartCells(board.rows, board.columns),
        })
    }

    const handleResize = (rows: number, columns: number) => {
        setGeneration(0)
        setBoard({ rows, columns, cells: getStartCells(rows, columns) })
    }

    return (
        <main className="p-4 justify-center flex flex-1">
            <div className="w-full max-w-7xl flex flex-wrap gap-4 text-base">
                <div className="flex flex-1 flex-col w-full gap-6 p-4 rounded-lg outline-2 outline-border bg-background-light">
                    <section className="flex flex-col">
                        <h2 className="uppercase">The Board</h2>
                        <h3 className="text-xl text-text">
                            A handful of cells. One Universe.
                        </h3>
                    </section>
                    <Canvas board={board} onResize={handleResize} />
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
                <div className="flex flex-col gap-6 w-full max-w-80">
                    <InfoPanel generation={generation} liveCells={liveCells} />
                    <div className="flex flex-col gap-4">
                        <SecondaryButton label="Start" handleClick={() => {}} />
                        <div className="flex gap-4">
                            <PrimaryButton
                                label="Step"
                                handleClick={() => {}}
                            />
                            <PrimaryButton
                                label="Reset"
                                handleClick={resetBoard}
                            />
                        </div>
                    </div>
                    <Slider />
                    <StartingPatterns
                        patternId={patternId}
                        onSelect={loadPattern}
                        onReselect={reselectPattern}
                    />
                    <RulePanel />
                    <PrimaryButton
                        label="Clear board"
                        handleClick={clearBoard}
                    />
                </div>
            </div>
        </main>
    )
}

export default Main
