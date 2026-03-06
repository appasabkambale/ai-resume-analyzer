import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
  return (
    <Link to={`/resume/${id}`} className="resume-card group animate-fade-in">
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="!text-text-primary font-bold break-words">{companyName}</h2>
          <h3 className="text-lg break-words text-text-secondary">{jobTitle}</h3>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border animate-fade-in overflow-hidden">
        <div className="w-full h-full bg-surface-800">
          <img
            src={imagePath}
            alt="resume"
            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </Link>
  )
}

export default ResumeCard