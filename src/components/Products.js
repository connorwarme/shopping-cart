import React from "react";
import Product from "./Product";
import ProdCard from "./ProdCard";
import content from "./Content";

const Products = ({ add, prod }) => {
    const handleViewClick = (e) => {
        const product = prod.find(item => item.id === e.target.id);
        console.log(product);
    }
    return (
        <div className="products">
            <h1>Products Page</h1>
            <div className="products-container">
                {content.map(item => {
                    return <ProdCard key={item.id} data={item} add={add} view={handleViewClick}/>
                })}
            </div>
        </div>
    )
}

export default Products;