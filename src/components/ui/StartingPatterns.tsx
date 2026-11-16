import type { PatternId } from '../../patterns'
import RadioButton from './RadioButton'

type StartingPatternsProps = {
    patternId: PatternId
    setPatternId: React.Dispatch<React.SetStateAction<PatternId>>
}

const StartingPatterns = ({
    patternId,
    setPatternId,
}: StartingPatternsProps) => {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-text text-lg">Starting patterns</h2>
            <span className="text-text-muted">Start over with a pattern</span>
            <fieldset className="flex flex-col gap-2">
                <legend className="sr-only">Starting patterns</legend>
                <RadioButton
                    id="r-pentomino"
                    name="R-Pentomino"
                    info="5 cells · chaotic"
                    isSelected={patternId === 'r-pentomino'}
                    onSelect={setPatternId}
                />
                <RadioButton
                    id="glider"
                    name="Glider"
                    info="5 cells · moving"
                    isSelected={patternId === 'glider'}
                    onSelect={setPatternId}
                />
                <RadioButton
                    id="pulsar"
                    name="Pulsar"
                    info="48 cells · oscillating"
                    isSelected={patternId === 'pulsar'}
                    onSelect={setPatternId}
                />
            </fieldset>
        </section>
    )
}

export default StartingPatterns
