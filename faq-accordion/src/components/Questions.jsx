import React from "react";
import Line from "./Line";

function Questions(props) {
  const selectedBold = props.open ? "font-bold" : "font-base";
  const imgDirection = props.open && "rotate-180";
  const showParagraph = props.open && (
    <p className="py-2 w-11/12 transition-all delay-700 ease-in-out text-secondaryGrayishBlue">
      {props.answer}
    </p>
  );

  return (
    <article className="w-full p-2 " onClick={props.handleClick}>
      <div className="flex justify-between items-center">
        <p
          className={`text-sm ${selectedBold} hover:text-softRed hover:cursor-pointer  text-darkDesaturatedBlue`}
        >
          {props.title}
        </p>
        <img className={`${imgDirection}`} src="/icon-arrow.svg" alt="" />
      </div>
      {showParagraph}

      <Line />
    </article>
  );
}

export default Questions;
