import Card from "./components/Card";
import rawdata from "./data";

function App() {
  const data = rawdata.map((item) => {
    return <Card {...item} />;
  });

  return <div className="m-4 md:grid md:grid-cols-3 md:max-w-4xl">{data}</div>;
}

export default App;
