import React, { useState } from "react";
import "./planCard.css";

function PlanCard({
  cardSelect,
  setCardSelect,
  index,
  icon,
  title,
  price,
  plan,
  formData,
  setFormData,
  selected,
}) {
  const handleCardClick = (index) => {
    setCardSelect(cardSelect === index ? cardSelect : index);
    setFormData({ ...formData, planPrice: price, planType: title });
  };

  return (
    <div
      onClick={() => handleCardClick(index)}
      className={!selected ? "plan-card" : "plan-card selected"}
    >
      <div className="plan-card-icon">
        <img src={icon} alt="" />
      </div>
      <div className="card-info-wrapper">
        <div className="plan-card-title">{title}</div>
        <div className="plan-card-price">
          ${price}/{plan ? "mo" : "yr"}
        </div>
        {!plan && <div className="plan-card-discount">2 months free</div>}
      </div>
    </div>
  );
}

export default PlanCard;
