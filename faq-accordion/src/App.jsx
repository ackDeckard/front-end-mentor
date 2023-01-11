import { useState } from "react";
import Box from "./components/Box";
import Questions from "./components/Questions";
import rawdata from "./data";

function App() {
  const [question, setQuestion] = useState(rawdata);

  const data = question.map((item) => (
    <Questions
      key={item.id}
      title={item.title}
      answer={item.answer}
      open={item.open}
      handleClick={() => handleClick(item.id)}
    />
  ));

  function handleClick(id) {
    setQuestion((prevState) =>
      prevState.map((current) => {
        return current.id === id
          ? { ...current, open: !current.open }
          : { ...current, open: false };
      })
    );
  }

  return (
    <>
      <article className="p-4 max-w-md w-80 h-[33rem] pb-6 rounded-3xl bg-white md:grid md:grid-cols-2 md:max-w-4xl  md:w-full md:gap-5 md:overflow-hidden md:h-[32rem] md:p-0">
        <div className="flex flex-col items-center md:hidden">
          <img
            className="-mt-32 w-5/6 "
            src="/illustration-woman-online-mobile.svg"
            alt="woman staring in front of a huge screen"
          />
          <img className="-m-16 w-4/5" src="/bg-pattern-mobile.svg" alt="" />
        </div>

        <div
          className="hidden 
        md:block 
        relative 
        md:bg-200%
        md:bg-desktop 
        md:bg-no-repeat  
        md:[background-position-x:-516px]
        md:[background-position-y:-240px]
        "
        >
          <img
            className="
            w-full 
            relative
            left-[-80px]
            top-20
            "
            src="/illustration-woman-online-desktop.svg"
            alt="woman staring in front of a huge screen"
          />
        </div>

        <div className="items-start pb-6 rounded-3xl md:max-w-[22rem] md:rounded-none">
          <h1 className="text-3xl pt-24 font-bold text-center md:text-left md:pl-2 md:pb-6">
            FAQ
          </h1>
          {data}
        </div>
      </article>
      <Box />
    </>
  );
}

export default App;
