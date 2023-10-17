import React from "react";

function AddonCard({
  setSelectedAddon,
  selectedAddon,
  index,
  title,
  discription,
  price,
  plan,
  formData,
  setFormData,
  ele,
}) {
  const handleAddonClick = (index, checked) => {
    if (checked.target.checked) {
      setSelectedAddon(index !== selectedAddon && index);
      setFormData({
        ...formData,
        addons: [...formData.addons, ele],
      });
    } else {
      setFormData({
        ...formData,
        addons: formData.addons.filter((ele) => ele.title !== title),
      });
    }
  };

  return (
    <label className="add-on-card" id={`addOn-${index}`}>
      <div className="add-on-info">
        <input
          type="checkBox"
          className="add-on-checkbox"
          id={`addOn-${index}`}
          checked={formData.addons.some((ele) => ele.title === title)}
          onChange={(checked) => handleAddonClick(index, checked)}
        />
        <div className="add-on-body">
          <div className="add-on-title">{title}</div>
          <div className="add-on-disc gray-font">{discription}</div>
        </div>
      </div>
      <div className="add-on-price">
        +${price}/{plan ? "mo" : "yr"}
      </div>
    </label>
  );
}

export default AddonCard;
