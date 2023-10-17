import React from "react";

function AddonsSummary({ plan, title, moPrice, yrPrice }) {
  return (
    <div className="addon-summary">
      <p className="addon-summary-title gray-font">{title}</p>
      {plan ? (
        <p className="addon-summary-price">+${moPrice}/mo</p>
      ) : (
        <p className="addon-summary-price">+${yrPrice}/yr</p>
      )}
    </div>
  );
}

export default AddonsSummary;
