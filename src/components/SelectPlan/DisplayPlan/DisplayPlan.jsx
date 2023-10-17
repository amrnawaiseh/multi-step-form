import React, { useState } from "react";
import arcade from "../../../assets/icon-arcade.svg";
import advanced from "../../../assets/icon-advanced.svg";
import pro from "../../../assets/icon-pro.svg";
import PlanCard from "../PlanCard/PlanCard";

function DisplayPlan({ plan, formData, setFormData }) {
  const subscriptionFee = [
    { icon: arcade, title: "Arcade", moPrice: 9, yrPrice: 90 },
    { icon: advanced, title: "Advanced", moPrice: 12, yrPrice: 120 },
    { icon: pro, title: "Pro", moPrice: 15, yrPrice: 150 },
  ];

  const [cardSelect, setCardSelect] = useState(0);

  return (
    <>
      <div className="plan-cards-container">
        {subscriptionFee.map((subscription, index) => (
          <PlanCard
            selected={subscription.title === formData.planType}
            key={index}
            index={index}
            icon={subscription.icon}
            title={subscription.title}
            price={plan ? subscription.moPrice : subscription.yrPrice}
            plan={plan}
            formData={formData}
            setFormData={setFormData}
            cardSelect={cardSelect}
            setCardSelect={setCardSelect}
          />
        ))}
      </div>
    </>
  );
}

export default DisplayPlan;
