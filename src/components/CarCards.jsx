import { use } from "react";
import CarCard from "./carCard";

const CarCards = ({ getDataPromise, setActiveTab, card, setCard }) => {
  const dataOfCars = use(getDataPromise);
  // console.log(dataOfCars);


  return (
    <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {dataOfCars.map((car) => (
        
        <div key={car.id} className="">
          <CarCard card = {card} setCard = {setCard} car = {car} setActiveTab = {setActiveTab}></CarCard>
          
        </div>
      ))}
    </div>
  );
};

export default CarCards;
