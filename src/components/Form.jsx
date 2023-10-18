import React, { useEffect, useState } from "react";
import "./Form.css";
import ProgressSteps from "./ProgressSteps/ProgressSteps";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SelectPlan from "./SelectPlan/SelectPlan";
import DisplayAddons from "./Add-ons/DisplayAddons";
import Summary from "./Summary/Summary";
import { useNavigate } from "react-router-dom";
import admin from "../data/admin.json";
import pageInfo from "../data/pageInfo.json";

function Form({ toggleComponent, setIsAdmin, isAdmin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    planType: "Arcade",
    planPeriod: "mo",
    planPrice: 9,
    addons: [],
    addonsPrice: 0,
    totalPurchase: 0,
  });

  const [page, setPage] = useState(0);
  const [moPlan, setPlan] = useState(true);
  const [stepValidate, setStepValidate] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkValidity, setCheckValidity] = useState(false);
  const [emailValidity, setEmailValidity] = useState(false);
  const [nameValidity, setNameValidity] = useState(false);
  const [phoneValidity, setPhoneValidity] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setStepValidate(nameValidity && emailValidity && phoneValidity);
  }, [formData]);

  const pageDisplay = () => {
    if (page === 0)
      return (
        <PersonalInfo
          inputValidate={stepValidate}
          setStepValidate={setStepValidate}
          formData={formData}
          setFormData={setFormData}
          setEmailValidity={setEmailValidity}
          setNameValidity={setNameValidity}
          setPhoneValidity={setPhoneValidity}
          checkValidity={checkValidity}
          emailValidity={emailValidity}
          nameValidity={nameValidity}
          phoneValidity={phoneValidity}
        />
      );
    if (page === 1)
      return (
        <SelectPlan
          formData={formData}
          setFormData={setFormData}
          plan={moPlan}
          setPlan={setPlan}
        />
      );
    if (page === 2)
      return (
        <DisplayAddons
          plan={moPlan}
          formData={formData}
          setFormData={setFormData}
        />
      );
    if (page === 3)
      return (
        <Summary
          plan={moPlan}
          formData={formData}
          setPage={setPage}
          setFormData={setFormData}
        />
      );
  };

  const handleNextBtn = () => {
    if (page === 3) {
      const data = JSON.parse(localStorage.getItem("formData")) || [];
      data.push(formData);
      localStorage.setItem("formData", JSON.stringify(data));
      toggleComponent();
    }
    if (stepValidate) setPage((currPage) => currPage + 1);
    setCheckValidity(true);
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const error =
      userEmail === admin.email && userPassword === admin.password
        ? ""
        : "Incorrect E-Mail or password";

    setErrorMessage(error);

    if (!error) {
      setIsAdmin(true);
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="form">
      <div className="progress-container">
        <div className="progress">
          {pageInfo.map((ele, i) => {
            return (
              <ProgressSteps
                page={page}
                stepNum={ele.stepNum}
                stepTitle={ele.stepTitle}
                key={i}
              />
            );
          })}
        </div>
        <form className="log-in-container" onSubmit={handleAdminLogin}>
          <p>ADMIN LOGIN</p>
          <input value={userEmail} onChange={handleEmail} type="text" />
          <input
            value={userPassword}
            onChange={handlePassword}
            type="password"
          />
          {errorMessage && <div className="error-msg">{errorMessage}</div>}
          <button type="submit" className="admin-btn">
            login
          </button>
        </form>
      </div>
      <div className="form-wrapper">
        <div className="form-container">
          <div className="header">
            <h1 className="header-title">{pageInfo[page].title}</h1>
            <p className="header-discription gray-text">
              {pageInfo[page].discription}
            </p>
          </div>
          <div className="form-body">{pageDisplay()}</div>
        </div>
        <div className="footer">
          <button
            style={{ backgroundColor: page === 3 && "#5400ff" }}
            onClick={handleNextBtn}
            className="next-btn"
          >
            {page === 3 ? "Confirm" : "Next Step"}
          </button>
          {page > 0 && (
            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="back-btn"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
