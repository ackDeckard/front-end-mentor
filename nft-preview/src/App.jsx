import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="h-screen grid place-items-center font-outfit">
      <section className="bg-cardBG max-w-sm rounded-xl m-4 p-6 shadow-md">
        <div className="relative flex items-center justify-center">
          <div className="absolute bg-cyancustom rounded-lg w-[99%] h-[99%] z-10"></div>
          <img
            className="absolute rounded-lg z-20 pointer-events-none "
            src="/icon-view.svg"
          ></img>

          <img
            className="rounded-lg transition-all relative z-30 hover:opacity-60 hover:z-10  hover:cursor-pointer "
            src="/image-equilibrium.jpg"
          ></img>
        </div>
        <h1 className="text-white font-semibold text-xl pt-4 pb-4">
          <a className="hover:text-cyancustom" href="#">
            Equilibrium #3429
          </a>
        </h1>
        <p className="text-softblue">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex justify-between items-center pt-4 pb-4">
          <div className="flex items-center text-cyancustom">
            <img className="pr-2" src="/icon-ethereum.svg" alt="" />
            <p className="font-semibold">0.041 ETH</p>
          </div>
          <div className="flex items-center text-softblue ">
            <img className="p-2" src="/icon-clock.svg" alt="" />
            <p>3 days left</p>
          </div>
        </div>

        <div className="border-b text-linedetail"></div>

        <div className="flex items-center pt-6 pb-4">
          <img
            className="h-6 border-white border rounded-full  "
            src="/image-avatar.png"
            alt=""
          />
          <p className="text-softblue pl-4 text-sm font-semibold">
            Creation of{" "}
            <a className="text-white hover:text-cyancustom" href="#">
              Jules Wyvern
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
