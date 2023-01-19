import React from "react";

function ErrorsElement() {
  return (
    <>
      <div className="absolute top-12 left-6 font-thin text-sm text-softRed xl:top-16">
        Please provide a valid email
      </div>
      <div>
        <img
          src="/icon-error.svg"
          alt=""
          className="absolute right-14 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:right-24"
        />
      </div>
    </>
  );
}

export default ErrorsElement;
