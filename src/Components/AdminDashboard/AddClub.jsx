import React from "react";
import { useState } from "react";

export default function AddClub({ onClose }) {
  const [formData, setFormData] = useState({
    clubName: "",
    clubID: "",
    presidentName: "",
    secretaryName: "",
    email: "",
    password: "",
    clubType: "",
    month: "",
  });

  const handleChange = (e) => {
    const { value } = e.target.value;
    setFormData({
      ...formData,
      clubName: value,
      clubID: value,
      presidentName: value,
      secretaryName: value,
      email: value,
      password: value,
      clubType: value,
      month: value,
    });
  };

  const [formErrors, setFormErrors] = useState({
    clubName: "",
    clubID: "",
    presidentName: "",
    secretaryName: "",
    email: "",
    password: "",
    clubType: "",
    month: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      clubName: "",
      clubID: "",
      presidentName: "",
      secretaryName: "",
      email: "",
      password: "",
      clubType: "",
      month: "",
    };

    // ClubName validation
    if (formData.clubName === "") {
      newErrors.clubName = "Club Name is required";
      valid = false;
    }

    // clubID validation
    if (formData.clubID === "") {
      newErrors.clubID = "Club ID is required";
      valid = false;
    }

    // presidentName validation
    if (formData.presidentName === "") {
      newErrors.presidentName = "President Name is required";
      valid = false;
    }

    // secretary validation
    if (formData.secretaryName === "") {
      newErrors.secretaryName = "Secretary Name is required";
      valid = false;
    }

    // Email validation
    if (!formData.email.includes("@gmail.com")) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Password validation
    if (formData.password.length == 0) {
      newErrors.password = "passsword is required";
      valid = false;
    }

    // club type validation
    if (formData.clubType === "") {
      newErrors.clubType = "select the club type";
    }

    // month validation
    if (formData.month === "") {
      newErrors.month = "select the month";
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform form submission here
      console.log("formData");
      // Replace console.log with your form submission logic (e.g., API call)
    } else {
      console.log("Form is invalid. Please check the fields.");
    }
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={validateForm}>
          <div className="form-top">
            <div className="form-left">
              <h1>add club</h1>
              <h4>titles goes here</h4>
            </div>
            <div className="form-right">
              <span className="material-symbols-outlined" onClick={onClose}>
                close
              </span>
            </div>
          </div>
          <div className="input-section">
            <div className="input">
              <label htmlFor="clubName">club name:</label>
              <input
                type="text"
                placeholder="enter club name"
                value={formData.clubName}
                onChange={handleChange}
              />
              {formErrors.clubName && (
                <span style={{ color: "red" }}>{formErrors.clubName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="clubID">club id:</label>
              <input
                type="text"
                placeholder="enter club id"
                value={formData.clubID}
                onChange={handleChange}
              />
              {formErrors.clubID && (
                <span style={{ color: "red" }}>{formErrors.clubID}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="presidentName">president name:</label>
              <input
                type="text"
                placeholder="enter president name"
                value={formData.presidentName}
                onChange={handleChange}
              />
              {formErrors.presidentName && (
                <span style={{ color: "red" }}>{formErrors.presidentName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="secretaryName">secretary name:</label>
              <input
                type="text"
                placeholder="enter secretary name"
                value={formData.secretaryName}
                onChange={handleChange}
              />
              {formErrors.secretaryName && (
                <span style={{ color: "red" }}>{formErrors.secretaryName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="email">emial address:</label>
              <input
                type="email"
                placeholder="enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <span style={{ color: "red" }}>{formErrors.email}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="password">password:</label>
              <input
                type="password"
                placeholder="enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && (
                <span style={{ color: "red" }}>{formErrors.password}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="clubType">club type:</label>
              <select
                name="clubType"
                className="clubType"
                value={formData.clubType}
                onChange={handleChange}
                required
              >
                <option>select club type</option>
                <option value="1">interact</option>
                <option value="2">rotaract</option>
              </select>
              {formErrors.clubType && (
                <span style={{ color: "red" }}>{formErrors.clubType}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="clubName">month:</label>
              <input
                type="month"
                value={formData.month}
                onChange={handleChange}
              />
              {formErrors.month && (
                <span style={{ color: "red" }}>{formErrors.month}</span>
              )}
            </div>
          </div>
          <div className="btn">
            <button className="cancel" onClick={onClose}>
              cancel
            </button>
            <button className="add" onClick={handleSubmit}>
              add
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
