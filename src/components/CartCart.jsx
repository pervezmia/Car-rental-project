
const CartCart = ( {c, card, setCard}) => {
  
    const filterArray = card.filter(item => item.id !== c.id);
    
    const removeHandle = () => {
      setCard(filterArray);
    }
  
    return (
        <div className="rounded-2xl ">
                <div className="flex justify-between items-center border rounded-2xl p-4">
                  <div className="md:flex md:justify-between md:items-center gap-2.5">
                    <img
                      className="h-10 w-10 md:h-20 md:w-20 object-contain"
                      src={c.image}
                      alt=""
                    />
                    <div>
                      <h3 className="font-semibold md:font-bold text-xl md:text-2xl">
                        {c.name}
                      </h3>
                      <p>Brand: {c.brand}</p>
                    </div>
                  </div>
                  <div className="md:flex gap-2">
                    <h3 className="font-bold text-2xl">${c.price}</h3>
                    <button onClick={removeHandle} className="btn btn-error">remove</button>
                  </div>
                </div>
              </div>
    );
};

export default CartCart;