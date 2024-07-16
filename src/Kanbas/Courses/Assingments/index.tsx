import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import './styles.css'; // Import the CSS file

export default function Assignments() {
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
                <li className="wd-assignment-list-item list-group-item border-start border-5 border-success mb-3">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <br />
                    Multiple Modules | <strong>Not Available until</strong> May 6 at 12:00am
                    <br />
                    <strong>Due</strong> May 13 at 11:59pm | 100pts
                </li>
                <li className="wd-assignment-list-item list-group-item border-start border-5 border-success mb-3">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    Multiple Modules | <strong>Not Available until</strong> May 13 at 12:00am
                    <br />
                    <strong>Due</strong> May 20 at 11:59pm | 100pts
                </li>
                <li className="wd-assignment-list-item list-group-item border-start border-5 border-success mb-3">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - Javascript + React
                    </a>
                    <br />
                    Multiple Modules | <strong>Not Available until</strong> May 20 at 12:00am
                    <br />
                    <strong>Due</strong> May 27 at 11:59pm | 100pts
                </li>
            </ul>

            <form className="mb-4">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="points" className="form-label">Points</label>
                        <input type="number" id="points" className="form-control" placeholder="Enter points" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="assignment-group" className="form-label">Assignment Group</label>
                        <select id="assignment-group" className="form-control">
                            <option>Group 1</option>
                            <option>Group 2</option>
                            <option>Group 3</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="display-grade-as" className="form-label">Display Grade as</label>
                        <select id="display-grade-as" className="form-control">
                            <option>Points</option>
                            <option>Percentage</option>
                            <option>Letter Grade</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="submission-type" className="form-label">Submission Type</label>
                        <select id="submission-type" className="form-control">
                            <option>Online</option>
                            <option>Paper</option>
                            <option>No Submission</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="assign" className="form-label">Assign</label>
                        <input type="text" id="assign" className="form-control" placeholder="Assign to" />
                    </div>
                </div>
            </form>
        </div>
    );
}