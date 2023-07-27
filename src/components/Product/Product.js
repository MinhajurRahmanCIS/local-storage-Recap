import React from 'react';
import './Product.css'
import { addProductLocalStorage, deleteShoppingCart, removeCart } from '../utility/fakeDb';
const Product = (props) => {
    const {name, price, picture, _id} = props.product;

    const addToCart = _id => {
        addProductLocalStorage(_id);
    }

    const removeFromCart = id => {
        removeCart(id);
    }
    const clearCart = () => {
        deleteShoppingCart();
    }

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h1>Name: {name}</h1>
            <h4>Price: {price}</h4>
            <button onClick={()=>addToCart(_id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(_id)}>Clear Cart</button>
            <button onClick={clearCart}>deleteShoppingCart</button>
        </div>
    );
};

export default Product;