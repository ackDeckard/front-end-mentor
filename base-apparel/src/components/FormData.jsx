import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorsElement from "./ErrorElements";

function FormData(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("do something :)");
  };

  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Please provide a valid email",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
          },
        })}
        placeholder="Email address"
        className={`w-full ${errors.email ? "border-2" : "border"} ${
          errors.email ? "border-softRed" : "border-desaturatedRed"
        } rounded-full pt-3 pb-2 px-6 pr-36 xl:pt-4 xl:pb-3 text-darkGrayishRed
   placeholder-desaturatedRed placeholder-opacity-50`}
      />

      <button
        type="submit"
        className="h-full flex items-center rounded-full absolute -right-8 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-desaturatedRed bg-gradient-to-r from-grad3 to-grad4 shadow-xl px-6 xl:px-10 hover:bg-gradient-to-l xl:-right-12 hover:from-grad3 hover:to-grad3 hover:shadow-2xl"
      >
        <img
          src="/icon-arrow.svg"
          alt=""
          className="pl-1 pointer-events-none "
        />
      </button>

      {errors.email && <ErrorsElement />}
    </form>
  );
}

export default FormData;
