import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <section className="grid md:grid-cols-2 bg-white md:max-w-xl max-w-sm rounded-lg">
        <div className="hidden md:inline">
          <img
            className="h-full w-full object-cover md:col-start-1 md:rounded-l-lg md:col-end-2"
            src="/product-desktop.jpg"
            alt=""
          />
        </div>
        <img
          className="rounded-t-lg  md:hidden"
          src="/product-mobile.jpg"
          alt=""
        />

        <div className="p-6 md:p-8">
          <p className="uppercase text-base tracking-ultra text-card-grayishblue mb-1">
            perfume
          </p>
          <h1 className="text-4xl leading-9 font-bold text-card-darkblue pb-4 pt-1">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-card-grayishblue pb-4">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className="flex items-center text-3xl text-card-darkcyan font-bold pb-4">
            <span>$149.99</span>{" "}
            <span className="text-sm text-card-grayishblue font-medium line-through pl-5">
              $169.99
            </span>
          </div>

          <a
            href="#"
            className="flex justify-center p-2 bg-card-darkcyan rounded-lg hover:bg-card-darkcyanhover"
          >
            <div className="flex justify-center items-center p-1">
              <img src="/icon-cart.svg" />
              <p className="text-white pl-2 font-bold">Add to Cart</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
