import React, { useEffect } from "react";
import AddonsSummary from "./AddonsSummary/AddonsSummary";
import "./summary.css";

function Summary({ plan, formData, setPage, setFormData }) {
  const finalFormData = { ...formData };
  let totalPrice = 0;
  const addonsPrice = () => {
    let total = finalFormData.addons.reduce(
      (total, addon) => total + (plan ? addon.moPrice : addon.yrPrice),
      0
    );
    totalPrice += total;
  };

  addonsPrice();

  useEffect(() => {
    const updatePrices = (totalPrice, formData, setFormData, finalFormData) => {
      setFormData({
        ...formData,
        totalPurchase: totalPrice,
        addonsPrice: totalPrice - finalFormData.planPrice,
      });
    };

    updatePrices(totalPrice, formData, setFormData, finalFormData);
  }, [formData.addonsPrice]);

  return (
    <div className="summary-container">
      <div className="summary-info">
        <div className="plan-summary">
          <div className="plan-selection">
            <p>{`${finalFormData.planType} (${
              plan ? "Monthly" : "Yearly"
            })`}</p>
            <p className="gray-font" onClick={() => setPage(1)}>
              Change
            </p>
          </div>
          <div className="plan-price">
            {`$${finalFormData.planPrice}/${plan ? "mo" : "yr"}`}
          </div>
        </div>
        <div className="addons-summary-container">
          {finalFormData.addons.map((addon, i) => (
            <AddonsSummary
              plan={plan}
              key={i}
              title={addon.title}
              moPrice={addon.moPrice}
              yrPrice={addon.yrPrice}
            />
          ))}
        </div>
      </div>
      <div className="total-summary">
        <p className="gray-font">{`Total (per ${plan ? "month" : "year"})`}</p>
        <p>{`+$${(totalPrice += finalFormData.planPrice)}/${
          plan ? "mo" : "yr"
        }`}</p>
      </div>
    </div>
  );
}

export default Summary;
