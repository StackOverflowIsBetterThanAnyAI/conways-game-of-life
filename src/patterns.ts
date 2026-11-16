export type PatternId = 'r-pentomino' | 'glider' | 'pulsar'

export type Pattern = {
    id: PatternId
    cells: [number, number][]
}

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
        grid[(r + offR) * cols + (c + offC)] = true
    }
    return grid
}
