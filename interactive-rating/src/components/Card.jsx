import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

function Card() {
  const [selected, setSelected] = useState(createButton());
  const [ratefinal, setRatefinal] = useState(0);

  function createButton() {
    const arr = [];
    for (let i = 1; i < 6; i++) {
      arr.push({
        value: i,
        highlight: false,
        id: i,
      });
    }
    return arr;
  }

  function changeHighlight(id) {
    setRatefinal(id);
    setSelected((prevState) =>
      prevState.map((select) => {
        return select.id === id
          ? { ...select, highlight: !select.highlight }
          : { ...select, highlight: false };
      })
    );
  }

  console.log(ratefinal);
  const buttonElements = selected.map((select) => (
    <Buttons
      key={select.id}
      highlight={select.highlight}
      value={select.value}
      changeHighlight={() => changeHighlight(select.id)}
    />
  ));

  return (
    <section className="max-w-md rounded-xl m-6 p-8 bg-darkblue">
      <div className="rounded-full w-12 h-12 bg-mediumgrey flex items-center justify-center">
        <img src="/icon-star.svg" alt="yellow star icon" />
      </div>

      <h1 className="text-3xl mt-4 mb-4 text-white">How did we do?</h1>
      <p className="text-lightgrey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">{buttonElements}</div>

      <Link
        className="flex justify-center items-center bg-orangecustom w-full h-12 rounded-full text-white"
        to={ratefinal ? "/thanks" : ""}
        state={{ ratefinal }}
      >
        SUBMIT
      </Link>
    </section>
  );
}

export default Card;
