import "./App.css";
import CarCards from "./components/CarCards";
import IsActive from "./components/IsActive";
import Navbar from "./components/Navbar";

const dataFetch = async () => {
  const res = await fetch("/carData.json");
  return res.json();
};

const getDataPromise = dataFetch();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <IsActive></IsActive>
      <CarCards getDataPromise = {getDataPromise}></CarCards>
    </>
  );
}

export default App;
