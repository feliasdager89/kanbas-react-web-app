import React from 'react';
import { useParams } from 'react-router';
import { FaSearch, FaFileImport, FaFileExport } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import './styles.css'; // Import the CSS file

import users from '../../Database/users.json';
import enrollments from '../../Database/enrollments.json';
import grades from '../../Database/grades.json';

export default function Grades() {
  const { cid } = useParams();

  // Filter students enrolled in the current course
  const enrolledStudents = enrollments
    .filter(enrollment => enrollment.course === cid)
    .map(enrollment => users.find(user => user._id === enrollment.user))
    .filter((student): student is typeof users[0] => !!student);

  // Filter grades for the current course
  const courseGrades = grades.filter(grade => enrolledStudents.some(student => student._id === grade.student));

  // Get assignment IDs for the course (assuming assignments are provided or you have a way to get them)
  const assignmentIds = Array.from(new Set(courseGrades.map(grade => grade.assignment)));

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
              {assignmentIds.map((assignment, index) => (
                <th key={index}>Assignment {index + 1}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map(student => {
              const studentGrades = courseGrades.filter(grade => grade.student === student._id);
              const total = studentGrades.reduce((acc, grade) => acc + Number(grade.grade), 0);
              return (
                <tr key={student._id}>
                  <td>{student.firstName} {student.lastName}</td>
                  {assignmentIds.map((assignment, index) => {
                    const grade = studentGrades.find(grade => grade.assignment === assignment);
                    return (
                      <td key={index}>
                        {grade ? (
                          <input type="number" className="form-control" defaultValue={grade.grade} />
                        ) : (
                          "-"
                        )}
                      </td>
                    );
                  })}
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
