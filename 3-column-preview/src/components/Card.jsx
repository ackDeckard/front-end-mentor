import React from "react";

function Card(props) {
  return (
    <section
      className={`mx-4 p-12 md:mx-0 ${props.bgColor} first:rounded-t-lg last:rounded-b-lg max-w-sm md:first:rounded-none md:last:rounded-none md:first:rounded-l-lg md:last:rounded-r-lg`}
    >
      <img className="" src={`${props.coverImg}`} alt={`${props.altText}`} />
      <h1 className="font-bigshoulders py-8 uppercase text-white text-4xl">
        {props.title}
      </h1>

      <p className="text-paraWhite pb-4 md:pb-10">{props.description}</p>

      <a className="w-full md:p-4" href="#">
        <div
          className={`w-4/6 block p-3 text-center border-2 border-transparent font-bold mix-blend-screen bg-white rounded-full capitalize hover:border-white hover:text-paraWhite hover:bg-transparent`}
        >
          learn more
        </div>
      </a>
    </section>
  );
}

export default Card;
