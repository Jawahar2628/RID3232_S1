import { useState } from "react";
import "./addClub.css";

const Update = ({ onClose }) => {
  const [formData, setFormData] = useState({
    clubName: "",
    presidentName: "",
    secretaryName: "",
    email: "",
    password: "",
    clubType: "",
    month: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formErrors, setFormErrors] = useState({
    clubName: "",
    presidentName: "",
    secretaryName: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      clubName: "",
      presidentName: "",
      secretaryName: "",
      email: "",
      password: "",
    };

    // ClubName validation
    if (formData.clubName.trim() === "") {
      newErrors.clubName = "Club Name is required";
      valid = false;
    }

    // presidentName validation
    if (formData.presidentName.trim() === "") {
      newErrors.presidentName = "President Name is required";
      valid = false;
    }

    // secretary validation
    if (formData.secretaryName.trim() === "") {
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

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform form submission here
      console.log(formData);
      // Replace console.log with your form submission logic (e.g., API call)
    } else {
      console.log("Form is invalid. Please check the fields.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={validateForm}>
        <div className="form-top">
          <div className="form-left">
            <h1>update club</h1>
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
            <label htmlFor="projectName">project name:</label>
            <input
              type="text"
              placeholder="enter project name"
              value={formData.clubName}
              onChange={handleChange}
            />
            {formErrors.clubName && (
              <span style={{ color: "red" }}>{formErrors.clubName}</span>
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
            <label htmlFor="project-start-month">project starting month:</label>
            <input
              type="text"
              placeholder="enter month"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span style={{ color: "red" }}>{formErrors.email}</span>
            )}
          </div>
          <div className="input">
            <label htmlFor="project-end-month">project end month:</label>
            <input
              type="text"
              placeholder="enter month"
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
          </div>
          <div className="input">
            <label htmlFor="clubName">month:</label>
            <input
              type="month"
              value={formData.month}
              onChange={handleChange}
            />
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
  );
};

export default Update;
