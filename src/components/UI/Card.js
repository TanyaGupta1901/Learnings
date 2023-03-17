import React from "react";

function Card(props) {
  const classcss = "card " + props.className;
  return <div className={classcss}>{props.children}</div>;
}

export default Card;
