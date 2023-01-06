import React from "react";

function Buttons(props) {
  function testing() {
    return props.highlight ? "bg-orangecustom" : "bg-mediumgrey";
  }

  console.log(props.highlight);
  return (
    <div>
      <button
        onClick={props.changeHighlight}
        className={`rounded-full mt-6 mb-6 w-12 h-12  transition-colors duration-1000 ease-out hover:bg-orangecustom text-white ${testing()}`}
      >
        {props.value}
      </button>
    </div>
  );
}

export default Buttons;
