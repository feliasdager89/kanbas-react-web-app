import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import './styles.css'; // Import the CSS file
import { addAssignment, updateAssignment } from './assignmentsReducer';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: RootState) => state.assignments.assignments);
  const assignment = assignments.find((assignment) => assignment._id === aid) || {
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    course: cid,
  };

  const [currentAssignment, setCurrentAssignment] = useState<any>(assignment);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentAssignment({ ...currentAssignment, [name]: value });
  };

  const handleSave = () => {
    if (aid) {
      dispatch(updateAssignment(currentAssignment));
    } else {
      dispatch(addAssignment(currentAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" name="title" value={currentAssignment.title} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" name="description" value={currentAssignment.description} onChange={handleInputChange} />
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points" className="form-label">Points</label>
            </td>
            <td>
              <input id="wd-points" className="form-control" name="points" type="number" value={currentAssignment.points} onChange={handleInputChange} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" className="form-select">
                <option value="actual value 1">ASSIGNMENTS</option>
                <option value="actual value 2">Display Text 2</option>
                <option value="actual value 3">Display Text 3</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as" className="form-select">
                <option value="actual value 1">Percentage</option>
                <option value="actual value 2">Points</option>
                <option value="actual value 3">Letter</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" className="form-select">
                <option value="actual value 1">Online</option>
                <option value="actual value 2">In Person</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label className="form-label">Online Entry Options</label>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" value="text-entry" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" value="website-url" />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" value="media-recordings" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-student-anotations" className="form-check-input" value="student-anotations" />
                <label htmlFor="wd-student-anotations" className="form-check-label">Student Annotations</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="file-uploads" className="form-check-input" value="file-uploads" />
                <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" className="form-control" name="assignTo" value={currentAssignment.assignTo || "Everyone"} onChange={handleInputChange} />
              <div className="mt-2">
                <label className="form-label">Due</label>
                <input type="date" id="wd-due-date" className="form-control" name="dueDate" value={currentAssignment.dueDate} onChange={handleInputChange} />
              </div>
              <div className="mt-2">
                <label className="form-label">Available From</label>
                <input type="date" id="wd-available-from" className="form-control" name="availableFrom" value={currentAssignment.availableFrom} onChange={handleInputChange} />
              </div>
              <div className="mt-2">
                <label className="form-label">Until</label>
                <input type="date" id="wd-available-until" className="form-control" name="availableUntil" value={currentAssignment.availableUntil} onChange={handleInputChange} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}


  
  