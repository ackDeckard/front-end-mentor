import React from "react";
import { useLocation } from "react-router-dom";

function Thanks() {
  const location = useLocation();
  const { ratefinal } = location.state;

  console.log(ratefinal);
  return (
    <section className="flex flex-col justify-center items-center max-w-sm bg-darkblue rounded-2xl p-8">
      <img src="../thank-you.svg" alt="image showing a single choice" />
      <p className="m-6 p-1 pl-4 pr-4 rounded-full text-sm text-orangecustom bg-mediumgrey">
        You selected {ratefinal} out of 5
      </p>

      <h1 className="text-2xl text-white pb-2">Thank you!</h1>

      <p className="text-center text-lightgrey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}

export default Thanks;
