import React, { useState } from "react";
import "./clubDashboard.css";
import Aside from "./Aside";
import { detailsReport } from "./detailsReport";
import DeleteProject from "./DeleteProject";
import UpdateProject from "./UpdateProject";
import ExportProject from "./ExportProject";
import "./navbar.css";

export default function Project() {
  const [updateProject, setUpdateProject] = useState(false);
  const [deleteProject, setDeleteProject] = useState(false);
  const [exportProject, setExportProject] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">Project</a>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <div className="container">
        <Aside />
        <div className="details-report-container">
          <div className="heading-section">
            <div className="heading-section-nav">
              <div className="heading-section-left">
                <span className="material-symbols-outlined">lab_profile</span>
                <h1 className="heading">details report</h1>
              </div>
              <div className="heading-section-right">
                <button>
                  <span className="material-symbols-outlined">upgrade</span>
                  Export
                </button>
              </div>
            </div>
            <div className="majoreRole-details">
              <div className="majore-left">
                <h1>
                  <span>president:</span> president name
                </h1>
                <h1>
                  <span>secretary:</span> secretary name
                </h1>
              </div>
              <div className="majore-right">
                <div className="top">
                  <span className="material-symbols-outlined">inventory</span>
                </div>
                <div className="bottom">
                  <h1>34</h1>
                  <p>total projects</p>
                </div>
              </div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>project name </th>
                <th>start month</th>
                <th>end month</th>
                <th>
                  <input type="month" name="" id="" placeholder="enter month" />
                </th>
                <th>
                  <input
                    type="search"
                    name=""
                    id=""
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="search.."
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {detailsReport.map((eachDetail) => {
                const { id, clubName, month } = eachDetail;
                return (
                  <tr key={id}>
                    <td
                      onClick={() => {
                        setExportProject(true);
                      }}
                    >
                      {clubName}
                    </td>
                    <td>{month}</td>
                    <td>{month}</td>
                    <td>
                      <button
                        className="update"
                        onClick={() => {
                          setUpdateProject(true);
                        }}
                      >
                        update
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => {
                          setDeleteProject(true);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {updateProject && (
        <UpdateProject onClose={() => setUpdateProject(false)} />
      )}
      {deleteProject && (
        <DeleteProject onClose={() => setDeleteProject(false)} />
      )}
      {exportProject && (
        <ExportProject onClose={() => setExportProject(false)} />
      )}
    </React.Fragment>
  );
}
