import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isVisible, hide, title, children, cta }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") hide();
    };
    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, hide]);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={hide}>
      <div className="modal-wrapper">
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <button className="modal-close" onClick={hide} aria-label="Close modal">
              ✕
            </button>
          </div>
          <div className="modal-body">
            {children}
            {cta}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
