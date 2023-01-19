import FormData from "./components/FormData";

function App() {
  return (
    <article className="max-w-sm xl:max-w-full xl:w-screen xl:grid xl:grid-cols-10 xl:bg-desktop xl:bg-no-repeat xl:bg-cover">
      <img
        src="/hero-desktop.jpg"
        alt=""
        className="hidden xl:block xl:object-cover xl:col-start-7 xl:col-span-4 xl:h-screen xl:w-full"
      />

      <img
        src="/logo.svg"
        alt=""
        className="p-8 xl:col-start-1 xl:col-span-4 xl:row-start-1 xl:max-w-lg xl:mx-auto xl:pl-16 xl:pt-16"
      />

      <img src="/hero-mobile.jpg" alt="" className="xl:hidden" />

      <div className="m-10 xl:col-start-1 xl:col-span-6 xl:row-start-1 xl:max-w-lg  xl:m-auto ">
        <h1 className="text-5xl xl:text-7xl text-center text-darkGrayishRed uppercase tracking-[0.3em] font-semibold xl:text-left">
          <span className="text-desaturatedRed font-light block">We're</span>
          coming soon
        </h1>
        <p className="text-sm text-desaturatedRed text-center pt-4 xl:text-base xl:text-left xl:pr-16 xl:pb-7">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>

        <div className="xl:max-w-lg xl:pr-16">
          <FormData />
        </div>
      </div>
    </article>
  );
}

export default App;
