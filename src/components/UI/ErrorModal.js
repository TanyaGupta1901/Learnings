import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop"
      onClick={() => {
        props.onConfirm();
      }}
    ></div>
  );
};

const Overlay = (props) => {
  return (
    <div className="overlay">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onConfirm();
        }}
      >
        Ok
      </button>
    </div>
  );
};

function ErrorModal(props) {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay")
      )}
    </div>
  );
}

export default ErrorModal;
