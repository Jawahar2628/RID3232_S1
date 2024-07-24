import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Interact from "./Components/AdminDashboard/Interact";
import Rotaract from "./Components/AdminDashboard/Rotaract";
import InteractProjectDetails from "./Components/AdminDashboard/InteractProjectDetails";
import RotaractProjectDetails from "./Components/AdminDashboard/RotaractProjectDetails";
import Login from "./Components/Login";
import ClubDashboard from "./Components/ClubDashboard/ClubDashboard";
import Project from "./Components/ClubDashboard/Project";
import ClubMember from "./Components/ClubDashboard/ClubMember";
import Contact from "./Components/ClubDashboard/Contact";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/interact" element={<Interact />} />
        <Route path="/rotaract" element={<Rotaract />} />
        <Route
          path="/interact-project-full-details"
          element={<InteractProjectDetails />}
        />
        <Route
          path="/rotaract-project-full-details"
          element={<RotaractProjectDetails />}
        />
        <Route path="/clubDashboard" element={<ClubDashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/club-member" element={<ClubMember />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
