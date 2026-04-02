import React from "react";
import EmptyMessage from "./EmptyMessage";
import CartCart from "./CartCart";

const CartSection = ({ card, setCard }) => {
  const proceedHandle = () => {
    setCard([]);
  };
  const totalPrice = (card || []).reduce(
    (initial, item) => initial + item.price,
    0,
  );
  console.log(totalPrice);
  return (
    <>
      {card.length > 0 && (
        <div className="mb-4 max-w-[80%] mx-auto rounded-2xl border p-5 space-y-2.5 bg-green-">
          {card.length > 0 &&
            card.map((c) => (
              <div key={c.id} className="">
                <div className="">
                  <CartCart c={c} card={card} setCard={setCard}></CartCart>
                </div>
              </div>
            ))}
          {card.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-2xl ">Total: </h3>
                <h3 className="font-bold text-xl ">${totalPrice} </h3>
              </div>

              <button
                onClick={proceedHandle}
                className="font-bold p-5 bg-green-200 text-center rounded-2xl my-4 w-full"
              >
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      )}
      {card.length === 0 && <EmptyMessage></EmptyMessage>}
    </>
  );
};

export default CartSection;
