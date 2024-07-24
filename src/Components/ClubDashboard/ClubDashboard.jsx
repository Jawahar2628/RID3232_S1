import React, { useState } from "react";
import Aside from "./Aside";
import "./clubDashboard.css";
import AddProject from "./AddProject";

export default function ClubDashboard() {
  const [addProject, setAddProject] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">Dashboard</a>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <div className="container">
        <Aside />
        <main className="overview">
          <h1 className="heading">overview</h1>
          <div
            className="overview-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="overDetails" style={{ width: "350px" }}>
              <span className="material-symbols-outlined">inventory</span>
              <h1>34</h1>
              <h4>projects</h4>
            </div>
            <div className="overDetails" style={{ width: "350px" }}>
              <span className="material-symbols-outlined">groups</span>
              <h1>26</h1>
              <h4>total club members</h4>
            </div>
          </div>
          <div
            className="btn-section"
            style={{
              height: "250px",
              display: "flex",
              alignItems: "end",
            }}
          >
            <button
              style={{
                width: "100%",
                background: "aqua",
                padding: "10px",
                textTransform: "uppercase",
                fontWeight: "550",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setAddProject(true);
              }}
            >
              <span className="material-symbols-outlined">add</span>
              add project
            </button>
          </div>
        </main>
      </div>
      {addProject && (
        <AddProject
          onClose={() => {
            setAddProject(false);
          }}
        />
      )}
    </React.Fragment>
  );
}
