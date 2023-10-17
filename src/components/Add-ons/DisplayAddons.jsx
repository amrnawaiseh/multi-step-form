import React, { useState } from "react";
import AddonCard from "./Add-onCard/AddonCard";
import "./addons.css";
import addonsData from "../../data/addonsData.json";

function DisplayAddons({ plan, formData, setFormData }) {
  const [selectedAddon, setSelectedAddon] = useState(null);

  return (
    <div className="add-ons-container">
      {addonsData.map((addon, i) => (
        <AddonCard
          key={i}
          index={i}
          selected={selectedAddon === i}
          title={addon.title}
          discription={addon.discription}
          price={plan ? addon.moPrice : addon.yrPrice}
          plan={plan}
          formData={formData}
          setFormData={setFormData}
          selectedAddon={selectedAddon}
          setSelectedAddon={setSelectedAddon}
          ele={addon}
        />
      ))}
    </div>
  );
}

export default DisplayAddons;
