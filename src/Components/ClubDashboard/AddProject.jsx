import React, { useState } from "react";
import "./addClub.css";
import "./exportProject.css";

export default function AddProject({ onClose }) {
  const [formData, setFormData] = useState({
    projectName: "",
    projectChairName: "",
    projectSecretaryName: "",
    hostClubName: "",
    coHostClubName: "",
    projectAvenue: "",
    noOfBenifeshiers: "",
    speaker: "",
    totalAmountSpent: "",
    projectPhotoLink: "",
    projectDescription: "",
    presidentName: "",
    secretaryName: "",
    projectStartMonth: "",
    projectEndMonth: "",
    venue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formErrors, setFormErrors] = useState({
    projectName: "",
    projectChairName: "",
    projectSecretaryName: "",
    hostClubName: "",
    coHostClubName: "",
    projectAvenue: "",
    noOfBenifeshiers: "",
    speaker: "",
    totalAmountSpent: "",
    projectPhotoLink: "",
    projectDescription: "",
    presidentName: "",
    secretaryName: "",
    projectStartMonth: "",
    projectEndMonth: "",
    venue: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      projectName: "",
      projectChairName: "",
      projectSecretaryName: "",
      hostClubName: "",
      coHostClubName: "",
      projectAvenue: "",
      noOfBenifeshiers: "",
      speaker: "",
      totalAmountSpent: "",
      projectPhotoLink: "",
      projectDescription: "",
      presidentName: "",
      secretaryName: "",
      projectStartMonth: "",
      projectEndMonth: "",
      venue: "",
    };

    if (formData.projectName === "") {
      newErrors.projectName = "Project name is required";
      valid = false;
    }

    if (formData.projectChairName === "") {
      newErrors.projectChairName = "Project chairman name is required";
      valid = false;
    }

    if (formData.projectSecretaryName === "") {
      newErrors.projectSecretaryName = "Project secretary name is required";
      valid = false;
    }

    if (formData.hostClubName === "") {
      newErrors.hostClubName = "Host club name is required";
      valid = false;
    }

    if (formData.coHostClubName === "") {
      newErrors.coHostClubName = "Co-Host club name is required";
      valid = false;
    }

    if (formData.projectAvenue === "") {
      newErrors.projectAvenue = "Project avenue is required";
      valid = false;
    }

    if (formData.noOfBenifeshiers === "") {
      newErrors.noOfBenifeshiers = "No.of Beneficiaries is required";
      valid = false;
    }

    if (formData.speaker === "") {
      newErrors.speaker = "Speaker/Guests is required";
      valid = false;
    }

    if (formData.totalAmountSpent === "") {
      newErrors.totalAmountSpent = "Total amount spent is required";
      valid = false;
    }

    if (formData.projectPhotoLink === "") {
      newErrors.projectPhotoLink = "Project photo link is required";
      valid = false;
    }

    if (formData.projectDescription === "") {
      newErrors.projectDescription = "Project description is required";
      valid = false;
    }

    if (formData.presidentName === "") {
      newErrors.presidentName = "President name is required";
      valid = false;
    }

    if (formData.secretaryName === "") {
      newErrors.secretaryName = "Secretary name is required";
      valid = false;
    }

    if (formData.projectStartMonth === "") {
      newErrors.projectStartMonth = "Project start month is required";
      valid = false;
    }

    if (formData.projectEndMonth === "") {
      newErrors.projectEndMonth = "Project end month is required";
      valid = false;
    }

    if (formData.venue === "") {
      newErrors.venue = "Venue is required";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3005/api/v1/projects/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          onClose();
        } else {
          console.error("Error submitting form");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Form is invalid. Please check the fields.");
    }
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-top">
            <div className="form-left">
              <h1>Project Name</h1>
              <h4>Titles go here</h4>
            </div>
            <div className="form-right">
              <span className="material-symbols-outlined" onClick={onClose}>
                close
              </span>
            </div>
          </div>
          <div className="input-section export">
            <div className="input">
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                name="projectName"
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={handleChange}
              />
              {formErrors.projectName && (
                <span style={{ color: "red" }}>{formErrors.projectName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectChairName">Project Chairman Name:</label>
              <input
                type="text"
                name="projectChairName"
                placeholder="Enter project chairman name"
                value={formData.projectChairName}
                onChange={handleChange}
              />
              {formErrors.projectChairName && (
                <span style={{ color: "red" }}>{formErrors.projectChairName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectSecretaryName">Project Secretary Name:</label>
              <input
                type="text"
                name="projectSecretaryName"
                placeholder="Enter project secretary name"
                value={formData.projectSecretaryName}
                onChange={handleChange}
              />
              {formErrors.projectSecretaryName && (
                <span style={{ color: "red" }}>{formErrors.projectSecretaryName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="hostClubName">Host Club Name:</label>
              <input
                type="text"
                name="hostClubName"
                placeholder="Enter host club name"
                value={formData.hostClubName}
                onChange={handleChange}
              />
              {formErrors.hostClubName && (
                <span style={{ color: "red" }}>{formErrors.hostClubName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="coHostClubName">Co-Host Club Name:</label>
              <input
                type="text"
                name="coHostClubName"
                placeholder="Enter co-host club name"
                value={formData.coHostClubName}
                onChange={handleChange}
              />
              {formErrors.coHostClubName && (
                <span style={{ color: "red" }}>{formErrors.coHostClubName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectAvenue">Project Avenue:</label>
              <input
                type="text"
                name="projectAvenue"
                placeholder="Enter project avenue"
                value={formData.projectAvenue}
                onChange={handleChange}
              />
              {formErrors.projectAvenue && (
                <span style={{ color: "red" }}>{formErrors.projectAvenue}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="noOfBenifeshiers">No. of Beneficiaries:</label>
              <input
                type="text"
                name="noOfBenifeshiers"
                placeholder="Enter no. of beneficiaries"
                value={formData.noOfBenifeshiers}
                onChange={handleChange}
              />
              {formErrors.noOfBenifeshiers && (
                <span style={{ color: "red" }}>{formErrors.noOfBenifeshiers}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="speaker">Speaker/Guests:</label>
              <input
                type="text"
                name="speaker"
                placeholder="Enter speaker/guests"
                value={formData.speaker}
                onChange={handleChange}
              />
              {formErrors.speaker && (
                <span style={{ color: "red" }}>{formErrors.speaker}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="totalAmountSpent">Total Amount Spent:</label>
              <input
                type="text"
                name="totalAmountSpent"
                placeholder="Enter total amount spent"
                value={formData.totalAmountSpent}
                onChange={handleChange}
              />
              {formErrors.totalAmountSpent && (
                <span style={{ color: "red" }}>{formErrors.totalAmountSpent}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="presidentName">President Name:</label>
              <input
                type="text"
                name="presidentName"
                placeholder="Enter president name"
                value={formData.presidentName}
                onChange={handleChange}
              />
              {formErrors.presidentName && (
                <span style={{ color: "red" }}>{formErrors.presidentName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="secretaryName">Secretary Name:</label>
              <input
                type="text"
                name="secretaryName"
                placeholder="Enter secretary name"
                value={formData.secretaryName}
                onChange={handleChange}
              />
              {formErrors.secretaryName && (
                <span style={{ color: "red" }}>{formErrors.secretaryName}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectStartMonth">Project Starting Month:</label>
              <input
                type="month"
                name="projectStartMonth"
                placeholder="Enter month"
                value={formData.projectStartMonth}
                onChange={handleChange}
              />
              {formErrors.projectStartMonth && (
                <span style={{ color: "red" }}>{formErrors.projectStartMonth}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectEndMonth">Project End Month:</label>
              <input
                type="month"
                name="projectEndMonth"
                placeholder="Enter month"
                value={formData.projectEndMonth}
                onChange={handleChange}
              />
              {formErrors.projectEndMonth && (
                <span style={{ color: "red" }}>{formErrors.projectEndMonth}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="venue">Venue:</label>
              <input
                type="text"
                name="venue"
                placeholder="Enter venue"
                value={formData.venue}
                onChange={handleChange}
              />
              {formErrors.venue && (
                <span style={{ color: "red" }}>{formErrors.venue}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectPhotoLink">Project Photo Link:</label>
              <input
                type="text"
                name="projectPhotoLink"
                placeholder="Enter project photo link"
                value={formData.projectPhotoLink}
                onChange={handleChange}
              />
              {formErrors.projectPhotoLink && (
                <span style={{ color: "red" }}>{formErrors.projectPhotoLink}</span>
              )}
            </div>
            <div className="input">
              <label htmlFor="projectDescription">Project Description:</label>
              <textarea
                name="projectDescription"
                placeholder="Enter project description"
                value={formData.projectDescription}
                onChange={handleChange}
              ></textarea>
              {formErrors.projectDescription && (
                <span style={{ color: "red" }}>{formErrors.projectDescription}</span>
              )}
            </div>
            <div className="bottom-section">
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
