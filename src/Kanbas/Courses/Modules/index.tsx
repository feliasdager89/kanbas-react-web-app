import React from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database'; 
import { BsGripVertical } from 'react-icons/bs';

import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButton';

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <h2>Modules</h2>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

  
  