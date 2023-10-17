import React from "react";
import "./ProgressSteps.css";

function ProgressSteps({ page, stepNum, stepTitle }) {
  return (
    <div className="progress-steps">
      <div
        style={
          page + 1 === stepNum
            ? { background: "#9ddbff", color: "black", border: "none" }
            : { background: "" }
        }
        className="progress-step-num"
      >
        {stepNum}
      </div>
      <div className="progress-disc">
        <p className="progress-disc-num"> STEP {stepNum}</p>
        <p className="progress-disc-info">{stepTitle}</p>
      </div>
    </div>
  );
}

export default ProgressSteps;
