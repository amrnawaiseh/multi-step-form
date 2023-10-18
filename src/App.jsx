import React, { useState } from "react";
import Confirmation from "./components/Confirmation/Confirmation.jsx";
import Form from "./components/Form.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const toggleComponent = () => {
    setShowForm(!showForm);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            showForm ? (
              <Form
                toggleComponent={toggleComponent}
                setIsAdmin={setIsAdmin}
                isAdmin={isAdmin}
              />
            ) : (
              <Confirmation setIsAdmin={setIsAdmin} />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={<Dashboard isAdmin={isAdmin} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
