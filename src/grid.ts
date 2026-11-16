export type Board = {
    rows: number
    columns: number
    cells: boolean[]
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
