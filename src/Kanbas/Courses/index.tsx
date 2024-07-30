import React from 'react';
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { Navigate, Route, Routes, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Grades from "./Grades";
import Assignments from './Assingments';
import AssignmentEditor from './Assingments/Editor';

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(x => x);

  return (
    <div id="wd-courses">
       <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name}
        {pathnames.length > 2 && (
          <span>
            &gt;{" "}
            {pathnames.slice(2).map((value, index) => {
              const to = `/${pathnames.slice(0, index + 3).join("/")}`;
              return (
                <span key={to}>
                  <Link to={to} className="text-danger">
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </Link>
                  {index < pathnames.length - 3 && " > "}
                </span>
              );
            })}
          </span>
        )}
      </h2>
      <hr />
      <CoursesNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}
  
  