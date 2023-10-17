import React from "react";
import ProgressSteps from "../ProgressSteps/ProgressSteps";
import "./confirmation.css";
import thankYou from "../../assets/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import admin from "../../data/admin.json";
import pageInfo from "../../data/pageInfo.json";

function Confirmation({ setIsAdmin }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    admin.email = "amr.nawaiseh@sociumtech.com";
    admin.password = "123456789";
    if (userEmail == admin.email && userPassword == admin.password) {
      setIsAdmin(true);
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="confirmation">
      <div className="progress-container">
        <div className="progress">
          {pageInfo.map((ele, i) => {
            return (
              <ProgressSteps
                {...(i === 3 && { page: 3 })}
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
          <button type="submit" className="admin-btn">
            login
          </button>
        </form>
      </div>
      <div className="success-container">
        <div className="confirm-container">
          <div className="confirm-img">
            <img src={thankYou} alt="" />
          </div>
          <h1 className="confirm-header">Thank you!</h1>
          <p className="confirm-text gray-font">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
