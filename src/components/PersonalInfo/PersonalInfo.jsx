import React from "react";
import "./PersonalInfo.css";
import PersonalInfoInputs from "./PersonalInfoInputs/PersonalInfoInputs";
import inputsData from "../../data/inputsData.json";

function PersonalInfo({
  formData,
  setFormData,
  checkValidity,
  setEmailValidity,
  setNameValidity,
  setPhoneValidity,
  emailValidity,
  nameValidity,
  phoneValidity,
}) {
  const checkEmail = (e) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setEmailValidity(emailRegex.test(e.target.value));
  };

  const checkPhone = (e) => {
    setPhoneValidity(e.target.value.length === 10);
  };

  const checkName = (e) => {
    setNameValidity(e.target.value.length > 3);
  };

  return (
    // @Todo: iterate over fields data
    <div className="personal-info">
      <PersonalInfoInputs
        title={inputsData[0].title}
        formData={formData}
        setFormData={setFormData}
        type={inputsData[0].type}
        id={inputsData[0].id}
        placeholder={inputsData[0].placeholder}
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
          checkName(e);
        }}
        validity={nameValidity}
        checkValidity={checkValidity}
      />
      <PersonalInfoInputs
        title={inputsData[1].title}
        formData={formData}
        setFormData={setFormData}
        type={inputsData[1].type}
        id={inputsData[1].id}
        placeholder={inputsData[1].placeholder}
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
          checkEmail(e);
        }}
        validity={emailValidity}
        checkValidity={checkValidity}
      />
      <PersonalInfoInputs
        title={inputsData[2].title}
        formData={formData}
        setFormData={setFormData}
        type={inputsData[2].type}
        id={inputsData[2].id}
        placeholder={inputsData[2].placeholder}
        value={formData.phoneNumber}
        onChange={(e) => {
          setFormData({ ...formData, phoneNumber: e.target.value });
          checkPhone(e);
        }}
        validity={phoneValidity}
        checkValidity={checkValidity}
      />
    </div>
  );
}

export default PersonalInfo;
