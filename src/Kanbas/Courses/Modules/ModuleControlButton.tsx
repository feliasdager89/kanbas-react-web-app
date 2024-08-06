import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from 'react-icons/bs';
import GreenCheckmark from "./GreenCheckmark";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

const ModuleControlButtons: React.FC<ModuleControlButtonsProps> = ({ moduleId, deleteModule, editModule }) => {
  return (
    <div className="float-end">
      <button
        className="btn btn-warning me-2"
        onClick={() => editModule(moduleId)}
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteModule(moduleId)}
      >
        Delete
      </button>
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export default ModuleControlButtons;