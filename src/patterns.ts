import type { Board } from './grid'

export type PatternId = 'r-pentomino' | 'glider' | 'pulsar' | 'random'

export type FixedPatternId = Exclude<PatternId, 'random'>

export type Pattern = {
    id: FixedPatternId
    cells: [number, number][]
}

export const RANDOM_DENSITY = 0.15

const pulsarCells = (): [number, number][] => {
    const cells: [number, number][] = []
    const lines = [0, 5, 7, 12]
    const span = [2, 3, 4, 8, 9, 10]
    for (const a of lines)
        for (const b of span) {
            cells.push([a, b], [b, a])
        }
    return cells
}

export const PATTERNS: Pattern[] = [
    {
        id: 'r-pentomino',
        cells: [
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 1],
            [2, 1],
        ],
    },
    {
        id: 'glider',
        cells: [
            [0, 1],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ],
    },
    {
        id: 'pulsar',
        cells: pulsarCells(),
    },
]

export const placePattern = (
    p: Pattern,
    rows: number,
    cols: number
): boolean[] => {
    const grid = new Array(rows * cols).fill(false)
    const h = Math.max(...p.cells.map(([r]) => r)) + 1
    const w = Math.max(...p.cells.map(([, c]) => c)) + 1
    const offR = Math.floor((rows - h) / 2)
    const offC = Math.floor((cols - w) / 2)
    for (const [r, c] of p.cells) {
        const row = r + offR
        const col = c + offC
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            continue
        }
        grid[row * cols + col] = true
    }
    return grid
}

export const createRandomCells = (
    rows: number,
    cols: number,
    density = RANDOM_DENSITY
): boolean[] =>
    Array.from({ length: rows * cols }, () => Math.random() < density)

export const createStartingCells = (
    id: PatternId,
    rows: number,
    cols: number
): boolean[] => {
    if (id === 'random') {
        return createRandomCells(rows, cols)
    }
    const pattern = PATTERNS.find((p) => p.id === id)
    return pattern
        ? placePattern(pattern, rows, cols)
        : new Array(rows * cols).fill(false)
}

export const growRandomBoard = (
    start: Board,
    rows: number,
    columns: number,
    density = RANDOM_DENSITY
): Board => {
    if (rows <= start.rows && columns <= start.columns) {
        return start
    }
    const nextRows = Math.max(start.rows, rows)
    const nextColumns = Math.max(start.columns, columns)
    const cells = new Array<boolean>(nextRows * nextColumns)
    for (let row = 0; row < nextRows; row++) {
        for (let column = 0; column < nextColumns; column++) {
            const isKnown = row < start.rows && column < start.columns
            cells[row * nextColumns + column] = isKnown
                ? start.cells[row * start.columns + column]
                : Math.random() < density
        }
    }
    return { rows: nextRows, columns: nextColumns, cells }
}
