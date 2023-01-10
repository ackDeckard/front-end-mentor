import React from "react";

function Card(props) {
  return (
    <>
      <article
        className={`first:row-span-3 last:col-start-3 last:row-span-3 grid bg-white overflow-hidden shadow-xl rounded-lg mb-6 xl:mb-0  hover:scale-105`}
      >
        <div className={`${props.border} border-t-4`}></div>
        <div className="p-6 pb-2">
          <h1 className="text-verydarkblue font-bold text-xl pb-2">
            {props.title}
          </h1>
          <p className="text-sm text-grayishblue font-normal">
            {props.description}
          </p>
        </div>
        <img
          className="justify-self-end p-10"
          src={`${props.coverImg}`}
          alt={`${props.altText}`}
        />
      </article>
    </>
  );
}

export default Card;
