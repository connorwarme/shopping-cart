import React, { useEffect } from "react";
import ProdCard from "./ProdCard";
import { content } from "./Content";
import '../style/Products.css';

const Products = ({ add, prod }) => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.setAttribute('id', 'products');
    }, [])
    // this fn isn't doing anything... I passed state through the Link
    const handleViewClick = (e) => {
        const product = prod.find(item => item.id === e.target.id);
        console.log(product);
    }
    return (
        <div className="products-container">
            <div className="products-content">
            <h1 className="products-title">Packages</h1>
                {content.map(item => {
                    return <ProdCard key={item.id} data={item} add={add} view={handleViewClick}/>
                })}
            </div>
        </div>
    )
}

export default Products;