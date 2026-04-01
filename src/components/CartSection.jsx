import React from "react";

const CartSection = ({setActiveTab,}) => {
    
  return (
    <div>
      <div className="max-w-[80%] mx-auto py-10 space-y-2.5 border rounded-2xl px-7">
        <div className="flex justify-between items-center border rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <img src=" " alt="" />
            <div>
              <h3>car name</h3>
              <p>brand</p>
            </div>
          </div>
          <div className="flex gap-2">
            <h3>$00</h3>
            <button>remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
