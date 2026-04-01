import React, { useState } from 'react';
import { BsStarFill } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";


const CarCard = ({car, card, setCard}) => {
    
    const [rent, setRent] = useState(false);

    const rentBtnHandle = () => {
      setRent(true)
      setCard([...card, car])
    }
    
    

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                className="p-4 rounded-4xl h-80 w-full object-contain"
                src={car.image}
                
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title font-bold">{car.name}</h2>
                  <p className="text-gray-500">Brand: {car.brand}</p>
                </div>
                <div>
                  <h2 className="card-title font-bold">${car.finalPrice}</h2>
                  <p className="decoration">${car.price}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-amber-100 border border-amber-600 rounded-full">
                <span className="text-2xl text-amber-400">
                  <BsStarFill />
                </span>
              </div>
              <h2>
                {car.rating}{" "}
                <span className="text-xs text-gray-500">
                  ({car.reviews} reviews)
                </span>
              </h2>
            </div>
            <div className="p-4">
              {car.tags.map((tag, index) => (
                <p key={index} className="px-4 flex items-center gap-1.5 ">
                  <span className="text-green-400">
                    <IoShieldCheckmark />
                  </span>{" "}
                  {tag}
                </p>
              ))}
            </div>
            <div className="card-actions justify-center p-3">
              <button onClick={rentBtnHandle} className="btn btn-primary w-full rounded-full">
                {`${rent? "Added to Cart" : "Rent Now" }`}
              </button>
            </div>
          </div>
    );
};

export default CarCard;