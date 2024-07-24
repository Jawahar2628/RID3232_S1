import React, { useState } from "react";
import "./adminDashboard.css";
import Aside from "./Aside";
import UpdateClub from "./UpdateClub";
import DeleteClub from "./DeleteClub";
import { detailsReport } from "./detailsReport";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Rotaract() {
  const [updatClub, setUpdateClub] = useState(false);
  const [deleteClub, setDeleteClub] = useState(false);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">Rotaract</a>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <div className="container">
        <Aside />
        <div className="details-report-container">
          <div className="heading-section">
            <div className="heading-section-left">
              <span className="material-symbols-outlined">lab_profile</span>
              <h1 className="heading">details report</h1>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>club name </th>
                <th>club id</th>
                <th>month</th>
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
                const { id, clubName, clubID, month } = eachDetail;
                return (
                  <tr key={id}>
                    <td
                      onClick={() => {
                        navigate("/rotaract-project-full-details");
                      }}
                    >
                      {clubName}
                    </td>
                    <td>{clubID}</td>
                    <td>{month}</td>
                    <td>
                      <button
                        className="update"
                        onClick={() => {
                          setUpdateClub(true);
                        }}
                      >
                        update
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => {
                          setDeleteClub(true);
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
      {updatClub && <UpdateClub onClose={() => setUpdateClub(false)} />}
      {deleteClub && <DeleteClub onClose={() => setDeleteClub(false)} />}
    </React.Fragment>
  );
}
