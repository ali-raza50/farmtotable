import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const SuccessMessage = ({ isOpen, message, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        {message.type === "success" ? (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 text-6xl mb-4"
          />
        ) : (
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-red-500 text-6xl mb-4"
          />
        )}
        <p className="text-lg font-semibold">{message.text}</p>
        <div className="mt-4 flex justify-center">
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
