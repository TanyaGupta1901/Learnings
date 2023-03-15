import React from "react";

function Bar(props) {
  return (
    <div>
      <div className="bar-height" style={{ height: `${props.value}px` }}></div>
      <div className="bar-label">{props.label}</div>
    </div>
  );
}

export default Bar;
