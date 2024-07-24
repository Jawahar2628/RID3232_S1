import React, { useState } from "react";
import "./clubDashboard.css";
import Aside from "./Aside";
import { detailsReport } from "./detailsReport";
import "./navbar.css";
import AddMember from "./AddMember";
import UpdateMember from "./UpdateMember";
import DeleteMember from "./DeleteMember";

export default function ClubMember() {
  const [updateMember, setUpdateMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const [addMember, setAddMember] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">Club Members</a>
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
                <button
                  onClick={() => {
                    setAddMember(true);
                  }}
                >
                  <span className="material-symbols-outlined">person_add</span>
                  add memeber
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
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
                <div className="bottom">
                  <h1>34</h1>
                  <p>total members</p>
                </div>
              </div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>member name </th>
                <th>id</th>
                <th>designation</th>
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
                    <td>{clubName}</td>
                    <td>{id}</td>
                    <td>{month}</td>
                    <td>
                      <button
                        className="update"
                        onClick={() => {
                          setUpdateMember(true);
                        }}
                      >
                        update
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => {
                          setDeleteMember(true);
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
      {addMember && <AddMember onClose={() => setAddMember(false)} />}
      {updateMember && <UpdateMember onClose={() => setUpdateMember(false)} />}
      {deleteMember && <DeleteMember onClose={() => setDeleteMember(false)} />}
    </React.Fragment>
  );
}
