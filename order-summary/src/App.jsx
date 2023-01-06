function App() {
  return (
    <section className="bg-white max-w-sm rounded-3xl m-6">
      <img
        className="rounded-t-3xl"
        src="/hero.svg"
        alt="a person listening a song and dancing"
      />

      <div className="m-6 text-center">
        <h1 className="text-2xl font-extrabold pb-4 pt-6 text-darkblue">
          Order Summary
        </h1>
        <p className="px-5 text-desaturatedblue">
          You can now listen to millions of songs, audiobooks and podcasts on
          any device anywhere you like!
        </p>
        <div className="bg-verypaleblue p-4 my-6 rounded-xl ">
          <div className="grid grid-cols-3 auto-cols-max place-items-center">
            <img className="justify-self-start" src="icon-music.svg" alt="" />
            <div className="pr-10 sm:pr-20 text-sm">
              <p className="font-bold">Annual Plan</p>
              <p className="text-desaturatedblue">$59.99/year</p>
            </div>
            <a
              className="justify-self-end text-sm underline hover:text-hoverblue text-brightblue font-bold"
              href="#"
            >
              Change
            </a>
          </div>
        </div>

        <button className="w-full block py-3 text-white text-base font-medium rounded-xl bg-brightblue drop-shadow-2xl hover:bg-hoverblue">
          Proceed to Payment
        </button>

        <button className="text-desaturatedblue hover:text-black font-extrabold py-8 text-sm">
          Cancel Order
        </button>
      </div>
    </section>
  );
}

export default App;
