import React from 'react';
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css"; // Import the CSS file

export default function Kanbas() {
    return (
      <div id="wd-kanbas" className="d-flex">
        <KanbasNavigation />
        <div className="wd-main-content-offset flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:cid/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
        </div>
      </div>
  );
}
  
  