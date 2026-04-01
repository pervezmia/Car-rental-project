import React, { useState } from 'react';

const IsActive = () => {
    const [isActive, setIsActive] = useState('vehicle');

    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Select vehicles</h2>
            <div className='flex justify-center items-center gap-4 py-10'>
                <button onClick={() => setIsActive("vehicle")} className={`btn w-20 ${isActive === "vehicle" ? "bg-violet-600" : ""}`}>Vehicles</button>
                <button onClick={() => setIsActive("cart")} className={`btn w-20 ${isActive === "cart" ?"bg-violet-600" : ""}`}>Cart</button>
            </div>
        </div>
    );
};

export default IsActive;