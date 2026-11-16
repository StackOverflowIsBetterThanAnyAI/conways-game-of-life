import { useEffect, useRef } from 'react'
import type { Board } from '../../grid'
import Cell from './Cell'

const CELL_SIZE = 16

type CanvasProps = {
    board: Board
    onResize: (rows: number, columns: number) => void
}

const Canvas = ({ board, onResize }: CanvasProps) => {
    const canvasRef = useRef<HTMLElement>(null)

    const onResizeRef = useRef(onResize)
    useEffect(() => {
        onResizeRef.current = onResize
    })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) {
            return
        }

        let lastRows = -1
        let lastColumns = -1

        const handleResize = () => {
            const columns = Math.floor(canvas.clientWidth / CELL_SIZE)
            const rows = Math.floor(canvas.clientHeight / CELL_SIZE)
            if (rows === lastRows && columns === lastColumns) {
                return
            }
            lastRows = rows
            lastColumns = columns
            onResizeRef.current(rows, columns)
        }

        const observer = new ResizeObserver(handleResize)
        observer.observe(canvas)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <section
            ref={canvasRef}
            className="relative flex-1 min-h-0 outline-2 outline-dead rounded-sm overflow-hidden"
        >
            <div
                className="absolute inset-0 grid place-content-center"
                style={{
                    gridTemplateColumns: `repeat(${board.columns}, ${CELL_SIZE}px)`,
                    gridAutoRows: `${CELL_SIZE}px`,
                }}
            >
                {board.cells.map((isAlive, index) => (
                    <Cell key={index} index={index} isAlive={isAlive} />
                ))}
            </div>
        </section>
    )
}

export default Canvas
