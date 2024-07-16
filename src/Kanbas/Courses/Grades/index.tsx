import React from 'react';
import { FaSearch, FaPlus, FaFileImport, FaFileExport } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import './styles.css'; // Import the CSS file

export default function Grades() {
    return (
        <div className="container-fluid">
            <div className="row mb-3">
                <div className="col-md-6 mb-2 mb-md-0">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input type="text" className="form-control" placeholder="Search Student Names" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input type="text" className="form-control" placeholder="Search Assignment Names" />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Grades</h2>
                <div>
                    <button className="btn btn-secondary me-2">
                        <FaFileImport className="me-2" />
                        Import
                    </button>
                    <div className="dropdown d-inline">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="exportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaFileExport className="me-2" />
                            Export
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                            <li><a className="dropdown-item" href="#">Export to CSV</a></li>
                            <li><a className="dropdown-item" href="#">Export to Excel</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-primary ms-2">
                        <BsArrowRepeat className="me-2" />
                        Refresh
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Assignment 1</th>
                            <th>Assignment 2</th>
                            <th>Assignment 3</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td><input type="number" className="form-control" defaultValue="85" /></td>
                            <td>90</td>
                            <td>95</td>
                            <td>270</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>88</td>
                            <td>92</td>
                            <td>94</td>
                            <td>274</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>80</td>
                            <td>85</td>
                            <td>87</td>
                            <td>252</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}