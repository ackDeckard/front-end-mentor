import { useState } from "react";
import Stats from "./components/stats";
import dataStats from "./data/dataStats";

function App() {
  const [rawstats, rawSetstats] = useState(dataStats);

  const stats = rawstats.data.map((item) => (
    <Stats number={item.number} title={item.title} />
  ));

  return (
    <section className="grid place-items-center md:grid-cols-2 max-w-xs md:max-w-4xl m-4 rounded-lg bg-cardbackground">
      <div className="bg-overlay rounded-t-lg w-full h-full md:col-start-2 md:col-end-3 md:rounded-l-none md:rounded-r-lg">
        <img
          className="md:hidden rounded-t-lg mix-blend-soft-light"
          src="/header-mobile.jpg"
          alt="people during a meeting"
        />
        <img
          className="rounded-t-lg hidden md:block mix-blend-soft-light w-full h-full object-cover md:rounded-l-none md:rounded-r-lg"
          src="/header-desktop.jpg"
        />
      </div>

      <div className="m-8 pb-6 md:col-start-1 md:col-end-2 md:row-start-1 md:px-6 md:pb-0">
        <h1 className="text-white text-2xl text-center font-bold pb-4 font-lexa md:text-left md:text-3xl md:pt-6 md:pb-6">
          Get <span className="text-accent font-bold">insights</span> that help
          your business grow.
        </h1>
        <p className="text-mainbackground text-center text-statheadings font-inter text-sm m-2 md:m-0 md:text-left">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <section className="grid place-items-center font-lexa md:grid-cols-3 md:pt-10 md:place-items-start md:gap-1 md:py-6 ">
          {stats}
        </section>
      </div>
    </section>
  );
}

export default App;
