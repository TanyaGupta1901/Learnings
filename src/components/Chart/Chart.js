import React from "react";
import Bar from "./Bar";

function Chart(props) {
  return (
    <div>
      {props.dataPoints?.map((item) => {
        return <Bar label={item.label} height={item.value}></Bar>;
      })}
    </div>
  );
}

export default Chart;
