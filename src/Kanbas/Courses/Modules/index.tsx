import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addModule, deleteModule, updateModule } from './reducer';
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButton';

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const modules = useSelector((state: RootState) => state.modulesReducer.modules.filter(module => module.course === cid));
  
  const [currentModule, setCurrentModule] = useState<any>({
    _id: '',
    name: '',
    course: cid,
    lessons: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentModule({ ...currentModule, [name]: value });
  };

  const handleAddModule = () => {
    if (!currentModule.name.trim()) {
      alert('Module name is required');
      return;
    }
    dispatch(addModule(currentModule));
    setCurrentModule({
      _id: '',
      name: '',
      course: cid,
      lessons: []
    });
  };

  const handleUpdateModule = () => {
    if (!currentModule.name.trim()) {
      alert('Module name is required');
      return;
    }
    dispatch(updateModule(currentModule));
    setCurrentModule({
      _id: '',
      name: '',
      course: cid,
      lessons: []
    });
  };

  const handleDeleteModule = (id: string) => {
    dispatch(deleteModule(id));
  };

  return (
    <div className="p-4" id="wd-modules">
      <h1 id="wd-modules-title">Modules</h1>
      <hr />

      <h5>
        New Module
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-module-click"
          onClick={handleAddModule}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={handleUpdateModule}
          id="wd-update-module-click"
        >
          Update
        </button>
      </h5>
      <hr />

      <input
        value={currentModule.name}
        className="form-control mb-2"
        name="name"
        placeholder="Module Name"
        onChange={handleInputChange}
      />
      <textarea
        value={currentModule.description}
        className="form-control mb-2"
        name="description"
        placeholder="Module Description"
        onChange={handleInputChange}
      />
      <hr />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </div>
              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => setCurrentModule(module)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
              </div>
              <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
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
  
  