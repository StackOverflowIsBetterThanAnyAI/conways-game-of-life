import type { ComponentType, SVGProps } from 'react'
import { GrCheckboxSelected } from 'react-icons/gr'
import type { PatternId } from '../../patterns'
import { GliderIcon, PulsarIcon, RandomIcon, RPentominoIcon } from './icons'

const ICONS: Record<PatternId, ComponentType<SVGProps<SVGSVGElement>>> = {
    'r-pentomino': RPentominoIcon,
    glider: GliderIcon,
    pulsar: PulsarIcon,
    random: RandomIcon,
}

type RadioButtonProps = {
    id: PatternId
    name: string
    info: string
    isSelected: boolean
    onSelect: (id: PatternId) => void
    onReselect?: (id: PatternId) => void
}

const RadioButton = ({
    id,
    info,
    isSelected,
    name,
    onSelect,
    onReselect,
}: RadioButtonProps) => {
    const Icon = ICONS[id]

    return (
        <label
            className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg border px-4 py-3
                has-focus-visible:outline-2 has-focus-visible:outline-alive w-full 
                ${isSelected ? 'border-alive bg-background-light' : 'border-border-light hover:border-text-muted'}`}
        >
            <input
                type="radio"
                name="pattern"
                value={id}
                checked={isSelected}
                onChange={() => onSelect(id)}
                onClick={() => {
                    if (isSelected) {
                        onReselect?.(id)
                    }
                }}
                onKeyDown={(e) => {
                    if (isSelected && [' ', 'Enter'].includes(e.key)) {
                        onReselect?.(id)
                    }
                }}
                className="sr-only"
            />
            <span className="flex gap-4 items-center">
                <span className={isSelected ? 'text-alive' : 'text-text-muted'}>
                    <Icon />
                </span>
                <span className="flex flex-col gap-1">
                    <span className="font-medium text-text">{name}</span>
                    <span className="text-xs sm:text-sm">{info}</span>
                </span>
            </span>
            {isSelected && (
                <GrCheckboxSelected
                    color="#cef87a"
                    className="h-5 w-5 rounded-md"
                    aria-hidden="true"
                />
            )}
        </label>
    )
}

export default RadioButton
