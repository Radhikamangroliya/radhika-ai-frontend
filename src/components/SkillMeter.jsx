// ----------------------------------------------------------------------
// SkillMeter.jsx
// Human-written component that renders a circular animated skill meter.
// Used on the Skills page to show % proficiency visually.
// ----------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import "./SkillMeter.css";

export default function SkillMeter({ label, percent }) {
  const [progress, setProgress] = useState(0);

  // Animate from 0 → target percent
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= percent) {
        setProgress(start);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [percent]);

  return (
    <div className="skillmeter-wrapper">
      <div className="skillmeter-circle">
        <svg className="skillmeter-svg">
          <circle className="bg-ring" cx="50%" cy="50%" r="45"></circle>
          <circle
            className="progress-ring"
            cx="50%"
            cy="50%"
            r="45"
            style={{
              strokeDasharray: 2 * Math.PI * 45,
              strokeDashoffset:
                2 * Math.PI * 45 * (1 - progress / 100),
            }}
          ></circle>
        </svg>

        <div className="skillmeter-value">
          {progress}%
        </div>
      </div>

      <p className="skillmeter-label">{label}</p>
    </div>
  );
}
