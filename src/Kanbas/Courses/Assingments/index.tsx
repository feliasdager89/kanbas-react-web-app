import React from 'react';
import { useParams } from 'react-router';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { assignments } from '../../Database'; // Ensure this path is correct
import './styles.css'; // Import the CSS file

export default function Assignments() {
  const { cid } = useParams();
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container-fluid">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaSearch className="fs-4 me-2" />
            <input type="text" id="wd-search-assignment" className="form-control" placeholder="Search for Assignments" />
          </div>
          <div>
            <button id="wd-add-assignment-group" className="btn btn-outline-danger me-2">
              <FaPlus className="me-2" />
              Group
            </button>
            <button id="wd-add-assignment" className="btn btn-outline-danger">
              <FaPlus className="me-2" />
              Assignment
            </button>
          </div>
        </div>
      </div>

      <h3 id="wd-assignments-title" className="mb-4">
        ASSIGNMENTS 40% of Total <button className="btn btn-outline-danger ms-2"><FaPlus /></button>
      </h3>

      <ul id="wd-assignment-list" className="list-group mb-4">
        {filteredAssignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item border-start border-5 border-success mb-3">
            <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
              {assignment.title}
            </a>
            <br />
            Multiple Modules | <strong>Not Available until</strong> May 6 at 12:00am
            <br />
            <strong>Due</strong> May 13 at 11:59pm | 100pts
          </li>
        ))}
      </ul>
    </div>
  );
}
