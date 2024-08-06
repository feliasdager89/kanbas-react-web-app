import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 3,
    
    });

    //score
  //  const [score, setScore] = useState(assignment.score);

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

    const [module, setModule] = useState({
        id: 1,
        title: "Spotify",
        description: "Connect and interact with the Spotify API",
        course:"Web Development",
    });

    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    

  return (
    <div id="wd-working-with-objects">
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      
      <h3>Modifying the Module Object</h3>
      <a id="wd-module-title"
         className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/title/${module.title}`}>
        Update the Module Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={module.title} onChange={(e) =>
          setModule({ ...module, title: e.target.value })}/>
      <hr/>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Score:{assignment.score}</h4>
        <a
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          onClick={()=> setAssignment({...assignment, score: assignment.score + 1})}
        >
          +
        </a> 
        <a
          className="btn btn-danger"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          onClick={()=> setAssignment({...assignment, score: assignment.score - 1})}
        >
          -
        </a>      
       <hr/>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/description`}>
        Get Module Description
      </a><hr/>

    </div>
);}

