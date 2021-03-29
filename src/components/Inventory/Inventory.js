import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct = () =>{
        fakeData
    }
    return (
        <div>
            <button onClick={handleAddProduct}> Add Product</button>
        </div>
    );
};

export default Inventory;