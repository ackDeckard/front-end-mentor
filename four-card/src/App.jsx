import Card from "./components/Card";
import rawdata from "./data";

function App() {
  const items = rawdata.map((x) => {
    return <Card {...x} />;
  });

  return (
    <section className="max-w-sm m-7 p-2 xl:max-w-6xl ">
      <h1 className="font-light text-2xl xl:text-4xl xl:mb-4 text-center text-verydarkblue ">
        Reliable, efficient delivery
      </h1>
      <h1 className="font-bold text-2xl xl:text-4xl text-center text-verydarkblue ">
        Powered by Technology
      </h1>
      <p className="text-grayishblue text-center text-sm pt-4 pb-12 indent-0 xl:hidden">
        Our Artificial Intelligence powered tools{" "}
        <span className="block indent-2 ">
          {" "}
          use millions of project data points to
        </span>
        <span className="block indent-1">
          ensure that your project is successful
        </span>
      </p>
      <p className="text-grayishblue text-base pt-4 pb-12 hidden xl:block md:text-center xl:p-6 xl:pb-12">
        Our Artificial Intelligence powered tools use millions of project data
        <span className="block indent-1">
          points to ensure that your project is successful
        </span>
      </p>

      <div className="xl:grid xl:grid-flow-col xl:grid-cols-3 xl:grid-rows-2 xl:gap-8 items-center justify-center ">
        {items}
      </div>
    </section>
  );
}

export default App;
