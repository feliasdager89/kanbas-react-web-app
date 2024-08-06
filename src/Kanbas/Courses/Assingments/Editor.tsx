import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateAssignment } from './reducer';
import * as client from './client';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

  const [assignment, setAssignment] = useState({
    _id: '',
    title: '',
    description: '',
    points: '',
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    course: cid,
  });

  useEffect(() => {
    if (aid) {
      const assignmentToEdit = assignments.find((a) => a._id === aid);
      if (assignmentToEdit) {
        setAssignment({
          ...assignmentToEdit,
          points: assignmentToEdit.points.toString(), // Convert points to string
        });
      }
    }
  }, [aid, assignments]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleSave = async () => {
    await client.updateAssignment(aid as string, {
      ...assignment,
      points: parseInt(assignment.points, 10), // Convert points back to number
    });
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-title" className="form-label">Assignment Title</label>
        <input id="wd-title" name="title" className="form-control" value={assignment.title} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" name="description" className="form-control" value={assignment.description} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" name="points" className="form-control" value={assignment.points} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-dueDate" className="form-label">Due Date</label>
        <input id="wd-dueDate" name="dueDate" type="date" className="form-control" value={assignment.dueDate} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-availableFrom" className="form-label">Available From</label>
        <input id="wd-availableFrom" name="availableFrom" type="date" className="form-control" value={assignment.availableFrom} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-availableUntil" className="form-label">Available Until</label>
        <input id="wd-availableUntil" name="availableUntil" type="date" className="form-control" value={assignment.availableUntil} onChange={handleInputChange} />
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}

  