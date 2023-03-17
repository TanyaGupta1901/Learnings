import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop"
      onClick={() => {
        props.closeModal();
      }}
    ></div>
  );
};

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div>{props.children}</div>
      <div className="overlay-buttons">
        <button
          onClick={() => {
            props.closeModal();
          }}
        >
          Close
        </button>
        <button
          onClick={() => {
            props.closeModal();
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

function Modal(props) {
  return (
    props.showModal && (
      <div>
        {ReactDOM.createPortal(
          <Backdrop closeModal={props.closeModal} />,
          document.getElementById("backdrop")
        )}
        {ReactDOM.createPortal(
          <Overlay closeModal={props.closeModal}>{props.children}</Overlay>,
          document.getElementById("overlay")
        )}
      </div>
    )
  );
}

export default Modal;
