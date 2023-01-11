import React from "react";

function Box() {
  return (
    <div>
      <img
        className="hidden md:block
        absolute 
        md:top-[410px]
        md:left-[380px]
        "
        src="illustration-box-desktop.svg"
        alt="orange box with an at symbol at the top"
      />
    </div>
  );
}

export default Box;
