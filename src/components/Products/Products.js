import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('productsDb.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='container-products'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            
        </div>
    );
};


export default Products;