import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard({ isAdmin }) {
  const navigate = useNavigate();
  const [dataArray, setDataArray] = useState([]);

  const handleLogOut = () => {
    navigate("/");
  };

  if (!isAdmin) {
    handleLogOut();
  }

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDataArray(parsedData);
    }
  }, []);

  return (
    isAdmin && (
      <div className="data-container">
        <h1>FORMS DATA</h1>
        <button onClick={handleLogOut} className="logout-btn">
          LOG-OUT
        </button>
        {dataArray.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Plan Type</th>
                <th>Plan Period</th>
                <th>Plan Price</th>
                <th>Addons</th>
                <th>Addons Price</th>
                <th>Total Purchase</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.planType}</td>
                  <td>{item.planPeriod}</td>
                  <td>{item.planPrice}</td>
                  <td>
                    <ul>
                      {item.addons.map((addon, addonIndex) => (
                        <li key={addonIndex}>{addon.title}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{item.addonsPrice}</td>
                  <td>{item.totalPurchase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    )
  );
}

export default Dashboard;
