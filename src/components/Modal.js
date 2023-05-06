import React from "react";
import "./modal.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
      <button onClick={onClose} className={`${"btnClose"} "btn-close"`} />
        {children}
      </div>
    </div>
  );
};

export default Modal;

