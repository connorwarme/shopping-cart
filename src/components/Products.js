import React from "react";
import Product from "./Product";
import ProdCard from "./ProdCard";
import content from "./Content";

const Products = () => {

    return (
        <div className="products">
            <h1>Products Page</h1>
            <div className="products-container">
                {content.map(item => {
                    return <ProdCard key={item.id} data={item} />
                })}
            </div>
        </div>
    )
}

export default Products;