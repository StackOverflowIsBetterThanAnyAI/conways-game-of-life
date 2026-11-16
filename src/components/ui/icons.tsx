import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const SIZE = 3
const STEP = 4

const Dots = ({
    cells,
    ...props
}: IconProps & { cells: [number, number][] }) => (
    <svg
        viewBox="0 0 11 11"
        fill="currentColor"
        aria-hidden="true"
        className="size-4"
        {...props}
    >
        {cells.map(([r, c]) => (
            <rect
                key={`${r}-${c}`}
                x={c * STEP}
                y={r * STEP}
                width={SIZE}
                height={SIZE}
                rx={0.5}
            />
        ))}
    </svg>
)

export const RPentominoIcon = (props: IconProps) => (
    <Dots
        cells={[
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 1],
            [2, 1],
        ]}
        {...props}
    />
)

export const GliderIcon = (props: IconProps) => (
    <Dots
        cells={[
            [0, 1],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ]}
        {...props}
    />
)

export const PulsarIcon = (props: IconProps) => (
    <Dots
        cells={[
            [0.5, 0],
            [0.5, 1],
            [0.5, 2],
            [1.5, 0],
            [1.5, 1],
            [1.5, 2],
        ]}
        {...props}
    />
)

export const RandomIcon = (props: IconProps) => (
    <Dots
        cells={[
            [0, 0],
            [0, 2],
            [1, 1],
            [2, 0],
            [2, 1],
        ]}
        {...props}
    />
)
