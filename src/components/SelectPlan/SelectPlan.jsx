import React from "react";
import DisplayPlan from "./DisplayPlan/DisplayPlan";
import "./selectPlan.css";

function SelectPlan({ plan, setPlan, formData, setFormData }) {
  const togglePlan = (e) => {
    setPlan(!plan);
    setFormData({
      ...formData,
      planPeriod: !plan ? "mo" : "yr",
      planPrice: plan ? formData.planPrice * 10 : formData.planPrice / 10,
    });
  };

  return (
    <div className="select-plan">
      <DisplayPlan formData={formData} setFormData={setFormData} plan={plan} />
      <div className="plan-switcher">
        <div>monthly</div>
        <label className="toggle-switch">
          <input onChange={togglePlan} type="checkbox" checked={!plan} />
          <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
        <div>yearly</div>
      </div>
    </div>
  );
}

export default SelectPlan;
