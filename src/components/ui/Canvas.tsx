import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react'
import { resizeCells, type Board } from '../../grid'
import { createStartingCells, type PatternId } from '../../patterns'
import Cell from './Cell'

const CELL_SIZE = 16

type CanvasProps = {
    board: Board
    setBoard: Dispatch<SetStateAction<Board>>
    patternId: PatternId
}

const Canvas = ({ board, setBoard, patternId }: CanvasProps) => {
    const canvasRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) {
            return
        }

        const handleResize = () => {
            const columns = Math.floor(canvas.clientWidth / CELL_SIZE)
            const rows = Math.floor(canvas.clientHeight / CELL_SIZE)
            setBoard((prev) =>
                prev.rows === rows && prev.columns === columns
                    ? prev
                    : {
                          rows,
                          columns,
                          cells:
                              !prev.rows || !prev.columns
                                  ? createStartingCells(
                                        patternId,
                                        rows,
                                        columns
                                    )
                                  : resizeCells(
                                        prev.cells,
                                        prev.columns,
                                        rows,
                                        columns
                                    ),
                      }
            )
        }

        const observer = new ResizeObserver(handleResize)
        observer.observe(canvas)

        return () => {
            observer.disconnect()
        }
    }, [patternId, setBoard])

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
