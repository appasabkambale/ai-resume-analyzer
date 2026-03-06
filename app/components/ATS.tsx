import React from 'react'

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  const gradientClass = score > 69
    ? 'from-emerald-900/20'
    : score > 49
      ? 'from-amber-900/20'
      : 'from-rose-900/20';

  const iconSrc = score > 69
    ? '/icons/ats-good.svg'
    : score > 49
      ? '/icons/ats-warning.svg'
      : '/icons/ats-bad.svg';

  const subtitle = score > 69
    ? 'Great Job!'
    : score > 49
      ? 'Good Start'
      : 'Needs Improvement';

  return (
    <div className={`bg-gradient-to-b ${gradientClass} to-surface-800/60 glass-card w-full p-6`}>
      {/* Top section */}
      <div className="flex items-center gap-4 mb-6">
        <img src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold !text-text-primary">ATS Score — {score}/100</h2>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-text-primary">{subtitle}</h3>
        <p className="text-text-secondary mb-4">
          This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
        </p>

        {/* Suggestions */}
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3">
              <img
                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                alt={suggestion.type === "good" ? "Check" : "Warning"}
                className="w-5 h-5 mt-1"
              />
              <p className={suggestion.type === "good" ? "text-badge-green-text" : "text-badge-yellow-text"}>
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <p className="text-text-muted italic">
        Keep refining your resume to improve your chances of getting past ATS filters and into the hands of recruiters.
      </p>
    </div>
  )
}

export default ATS