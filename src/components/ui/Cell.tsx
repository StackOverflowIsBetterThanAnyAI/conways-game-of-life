import { memo } from 'react'

type CellProps = {
    index: number
    isAlive: boolean
}

const Cell = memo(function Cell({ index, isAlive }: CellProps) {
    return (
        <span
            data-index={index}
            className={`h-4 w-4 outline-border outline-1 ${isAlive ? 'bg-alive' : 'bg-dead'}`}
        ></span>
    )
})

export default Cell
