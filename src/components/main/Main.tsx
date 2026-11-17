import { useCallback, useEffect, useRef, useState } from 'react'
import { nextGeneration, resizeCells, type Board } from '../../grid'
import {
    createStartingCells,
    growRandomBoard,
    type PatternId,
} from '../../patterns'
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
    const [generationsPerSecond, setGenerationsPerSecond] = useState(5)
    const [isRunning, setIsRunning] = useState(false)
    const [isMovingByStep, setIsMovingByStep] = useState(false)
    const [patternId, setPatternId] = useState<PatternId>('r-pentomino')
    const [board, setBoard] = useState<Board>({
        rows: 0,
        columns: 0,
        cells: [],
    })

    const [randomStart, setRandomStart] = useState<Board | null>(null)

    const liveCells = board.cells.filter(Boolean).length

    const hasStarted = !!generation

    const loadPattern = (id: PatternId) => {
        const cells = createStartingCells(id, board.rows, board.columns)
        setPatternId(id)
        setGeneration(0)
        setBoard({ ...board, cells })
        if (id === 'random') {
            setRandomStart({ rows: board.rows, columns: board.columns, cells })
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

    const getStartCells = (rows: number, columns: number) => {
        if (patternId !== 'random' || !randomStart) {
            return createStartingCells(patternId, rows, columns)
        }
        const grown = growRandomBoard(randomStart, rows, columns)
        if (grown !== randomStart) {
            setRandomStart(grown)
        }
        return resizeCells(grown.cells, grown.columns, rows, columns)
    }

    const handleIsRunning = () => {
        setIsRunning((prev) => !prev)
        setIsMovingByStep(false)
    }

    const handleIsMovingByStep = () => {
        setIsRunning(false)
        setIsMovingByStep(true)
        gameTick()
    }

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

    const shortcutsRef = useRef({ reset: resetBoard, clear: clearBoard })
    useEffect(() => {
        shortcutsRef.current = { reset: resetBoard, clear: clearBoard }
    })

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            event.stopPropagation()
            if (event.ctrlKey || event.metaKey || event.altKey) {
                return
            }
            const target = event.target as HTMLElement
            if (event.key.toLowerCase() !== 'arrowright' && event.repeat) {
                return
            }
            if (
                event.key.toLowerCase() === 'arrowright' &&
                target.tagName === 'INPUT'
            ) {
                return
            }
            if (
                event.key === ' ' &&
                (target.tagName === 'BUTTON' || target.tagName === 'INPUT')
            ) {
                return
            }

            switch (event.key.toLowerCase()) {
                case 'r':
                    shortcutsRef.current.reset()
                    break
                case 'c':
                    shortcutsRef.current.clear()
                    break
                case 'arrowright':
                    handleIsMovingByStep()
                    break
                case ' ':
                    event.preventDefault()
                    handleIsRunning()
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const interval = 1000 / generationsPerSecond

    const gameTick = useCallback(() => {
        setBoard((prev) => ({
            ...prev,
            cells: nextGeneration({
                cells: prev.cells,
                rows: prev.rows,
                columns: prev.columns,
            }),
        }))
        setGeneration((prev) => prev + 1)
    }, [])

    useEffect(() => {
        if (!isRunning) {
            return
        }
        const id = isMovingByStep
            ? undefined
            : setInterval(() => {
                  gameTick()
              }, interval)

        return () => {
            clearInterval(id)
        }
    }, [gameTick, interval, isMovingByStep, isRunning])

    return (
        <main className="p-6 lg:p-4 justify-center flex flex-1">
            <div className="w-full max-w-7xl grid grid-cols-1 min-lg:grid-cols-[minmax(640px,1fr)_320px] gap-6 lg:gap-4 text-sm sm:text-base">
                <div className="flex flex-col min-w-0 gap-4 sm:gap-6 p-4 rounded-lg outline-2 outline-border bg-background-light">
                    <section className="flex flex-col">
                        <h2 className="uppercase">The Board</h2>
                        <h3 className="text-lg sm:text-xl text-text">
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
                <div className="flex flex-col gap-6 min-w-80">
                    <div className="flex gap-4 lg:flex-col">
                        <InfoPanel
                            generation={generation}
                            liveCells={liveCells}
                        />
                        <div className="flex flex-col gap-4 max-lg:max-w-1/2 w-full">
                            <SecondaryButton
                                label={isRunning ? 'Stop' : 'Start'}
                                handleClick={handleIsRunning}
                            />
                            <div className="flex gap-4">
                                <PrimaryButton
                                    label="Step"
                                    handleClick={handleIsMovingByStep}
                                />
                                <PrimaryButton
                                    label="Reset"
                                    handleClick={resetBoard}
                                />
                            </div>
                            <PrimaryButton
                                className="lg:hidden"
                                label="Clear board"
                                handleClick={clearBoard}
                            />
                        </div>
                        <Slider
                            generationsPerSecond={generationsPerSecond}
                            setGenerationsPerSecond={setGenerationsPerSecond}
                        />
                    </div>
                    <StartingPatterns
                        patternId={patternId}
                        onSelect={loadPattern}
                        onReselect={reselectPattern}
                    />
                    <RulePanel />
                    <PrimaryButton
                        className="max-lg:hidden"
                        label="Clear board"
                        handleClick={clearBoard}
                    />
                </div>
            </div>
        </main>
    )
}

export default Main
