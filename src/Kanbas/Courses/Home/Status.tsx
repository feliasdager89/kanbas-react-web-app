import React from 'react';
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaTrashAlt, FaDownload, FaUpload, FaCog, FaCopy, FaArchive, FaShareSquare, FaSync, FaEye } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" />
                        Unpublish
                    </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" />
                        Publish
                    </button>
                </div>
            </div>
            <br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" />
                Import Existing Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" />
                Import from Commons
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaTrashAlt className="me-2 fs-5" />
                Delete Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaDownload className="me-2 fs-5" />
                Download Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaUpload className="me-2 fs-5" />
                Upload Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaCog className="me-2 fs-5" />
                Settings
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaCopy className="me-2 fs-5" />
                Copy Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaArchive className="me-2 fs-5" />
                Archive Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaShareSquare className="me-2 fs-5" />
                Share Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaSync className="me-2 fs-5" />
                Sync Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaEye className="me-2 fs-5" />
                View Details
            </button>
        </div>
    );
}

