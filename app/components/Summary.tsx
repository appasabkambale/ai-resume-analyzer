import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string, score: number }) => {
    const textColor = score > 70 ? 'text-badge-green-text'
        : score > 49
            ? 'text-badge-yellow-text' : 'text-badge-red-text';

    return (
        <div className="resume-summary">
            <div className="category">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <p className="text-2xl text-text-primary">{title}</p>
                    <ScoreBadge score={score} />
                </div>
                <p className="text-2xl text-text-secondary">
                    <span className={textColor}>{score}</span>/100
                </p>
            </div>
        </div>
    )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
    return (
        <div className="glass-card w-full">
            <div className="flex flex-row items-center p-6 gap-8">
                <ScoreGauge score={feedback.overallScore} />

                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold !text-text-primary">Your Resume Score</h2>
                    <p className="text-sm text-text-muted">
                        This score is calculated based on the variables listed below.
                    </p>
                </div>
            </div>

            <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
            <Category title="Content" score={feedback.content.score} />
            <Category title="Structure" score={feedback.structure.score} />
            <Category title="Skills" score={feedback.skills.score} />
        </div>
    )
}
export default Summary