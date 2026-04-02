import { useState } from "react";
import "./App.css";
import CarCards from "./components/CarCards";
import CartSection from "./components/CartSection";
import IsActive from "./components/IsActive";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const dataFetch = async () => {
  const res = await fetch("/carData.json");
  return res.json();
};

const getDataPromise = dataFetch();

function App() {

  const [activeTab, setActiveTab] = useState("vehicles");
  
  const [card, setCard] = useState([]);
  console.log(card);
  
  return (
    <>
      <Navbar card = {card}></Navbar>
      <Banner></Banner>
      <IsActive activeTab = {activeTab} setActiveTab = {setActiveTab} card = {card}></IsActive>
      {activeTab === "vehicles" && <CarCards card = {card} setCard = {setCard} getDataPromise = {getDataPromise}></CarCards>}
      {activeTab === "cart" && <CartSection card = {card} setCard = {setCard}></CartSection>}
      <Footer></Footer>
      
    </>
  );
}

export default App;
