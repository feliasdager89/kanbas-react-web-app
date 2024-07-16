import { Navigate, Route, Routes } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assingments";
import AssignmentEditor from "./Assingments/Editor";
import { FaAlignJustify } from 'react-icons/fa';
import Grades from './Grades'; 




export default function Courses() {
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      Course 1234
  </h2>
  <hr />
  
  <CoursesNavigation />
  <div>
  
    <Routes>
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
  
  