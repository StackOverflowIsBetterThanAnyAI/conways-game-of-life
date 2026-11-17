export type Board = {
    rows: number
    columns: number
    cells: boolean[]
}

export const nextGeneration = ({ cells, columns, rows }: Board) => {
    const newCellInformation = []
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const index = r * columns + c
            const isTop = index < columns
            const isBottom = index >= columns * (rows - 1)
            const isLeft = !(index % columns)
            const isRight = index % columns === columns - 1
            const cellState = cells[index]
            let neighbors = 0
            if (!(isTop || isLeft)) {
                neighbors += Number(cells[index - columns - 1])
            }
            if (!isTop) {
                neighbors += Number(cells[index - columns])
            }
            if (!(isTop || isRight)) {
                neighbors += Number(cells[index - columns + 1])
            }
            if (!isLeft) {
                neighbors += Number(cells[index - 1])
            }
            if (!isRight) {
                neighbors += Number(cells[index + 1])
            }
            if (!(isBottom || isLeft)) {
                neighbors += Number(cells[index + columns - 1])
            }
            if (!isBottom) {
                neighbors += Number(cells[index + columns])
            }
            if (!(isBottom || isRight)) {
                neighbors += Number(cells[index + columns + 1])
            }
            newCellInformation.push({ cellState, neighbors })
        }
    }
    return newCellInformation.map((item) => {
        const cellState = item.cellState
        const neighbors = item.neighbors
        if (cellState) {
            if (neighbors === 2 || neighbors === 3) {
                return true
            }
            return false
        }
        if (neighbors === 3) {
            return true
        }
        return false
    })
}

export const resizeCells = (
    oldCells: boolean[],
    oldColumns: number,
    rows: number,
    columns: number
): boolean[] => {
    const next = new Array<boolean>(rows * columns).fill(false)
    for (let i = 0; i < oldCells.length; i++) {
        if (!oldCells[i]) {
            continue
        }
        const row = Math.floor(i / oldColumns)
        const column = i % oldColumns
        if (row < rows && column < columns) {
            next[row * columns + column] = true
        }
    }
    return next
}
