import React from "react";

function Stats(props) {
  return (
    <>
      <p className="mt-4 font-bold text-white text-xl md:row-start-1">
        {props.number}
      </p>
      <p className="uppercase text-statheadings text-xs ">{props.title}</p>
    </>
  );
}

export default Stats;
