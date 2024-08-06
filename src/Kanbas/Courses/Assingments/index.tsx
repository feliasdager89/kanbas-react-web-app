import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setAssignments } from './reducer';
import * as client from './client';
import { Link } from 'react-router-dom';

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cid) {
      const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid);
        dispatch(setAssignments(assignments));
      };
      fetchAssignments();
    }
  }, [cid, dispatch]);

  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" className="form-control mb-3" />
      <Link to={`/Kanbas/Courses/${cid}/Assignments/New`} className="btn btn-primary mb-3">+ Assignment</Link>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button className="btn btn-outline-primary ms-2"><Link to={`/Kanbas/Courses/${cid}/Assignments/New`}>+</Link></button>
      </h3>
      <ul id="wd-assignment-list" className="list-group">
        {assignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
              {assignment.title}
            </Link>
            <br />
            Multiple Modules | <strong>Not Available until</strong> {assignment.availableFrom}
            <br />
            <strong>Due</strong> {assignment.dueDate} | {assignment.points}pts
          </li>
        ))}
      </ul>
    </div>
  );
}