import React, { useState } from "react";
import "./adminDashboard.css";
import { overviewDetails } from "./overviewDetails";
import { detailsReport } from "./detailsReport";
import Aside from "./Aside";
import UpdateClub from "./UpdateClub";
import DeleteClub from "./DeleteClub";
import AddClub from "./AddClub";
import "./navbar.css";

export default function AdminDashboard() {
  const [addClubPopUp, setAddClubPopUp] = useState(false);
  const [updatClub, setUpdateClub] = useState(false);
  const [deleteClub, setDeleteClub] = useState(false);

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
          <div className="overview-container">
            {overviewDetails?.map((eachDetail) => {
              const { id, title, num, logo } = eachDetail;
              return (
                <div className="overDetails" key={id}>
                  <img src={logo} alt="img" />
                  <h1>{num}</h1>
                  <h4>{title}</h4>
                </div>
              );
            })}
          </div>
          <div className="details-report-section">
            <div className="heading-section">
              <div className="heading-section-left">
                <span className="material-symbols-outlined">lab_profile</span>
                <h1 className="heading">details report</h1>
              </div>
              <div className="btns">
                <button
                  onClick={() => {
                    setAddClubPopUp(true);
                  }}
                >
                  <span className="material-symbols-outlined">add</span>add club
                </button>
                <button>
                  <span className="material-symbols-outlined">upgrade</span>
                  export
                </button>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>club name </th>
                  <th>club id</th>
                  <th>month</th>
                  <th>
                    <input
                      type="month"
                      name=""
                      id=""
                      placeholder="enter month"
                    />
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
                      <td>{clubName}</td>
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
        </main>
      </div>
      {addClubPopUp && <AddClub onClose={() => setAddClubPopUp(false)} />}
      {updatClub && <UpdateClub onClose={() => setUpdateClub(false)} />}
      {deleteClub && <DeleteClub onClose={() => setDeleteClub(false)} />}
    </React.Fragment>
  );
}