import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isVisible, hide, title, ...props }) =>
  isVisible
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal pa4">
                <div className="modal-header">
                  <div className="f2">{title}</div>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>{props.children}</div>
                  {props.cta && (
                    <>
                      <div className="line w-100" />
                      <div>{props.cta}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
