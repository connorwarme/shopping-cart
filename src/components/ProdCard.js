import React from "react";
import { Link } from "react-router-dom";

const ProdCard = ({ data, add, view }) => {
    return (
        <div className="product-card" id={data.id}>
            <h1>{data.title}</h1>
            <p>{data.about}</p>
            <button id={data.id} onClick={view}><Link to={`/products/${data.url}`} state={data}>View Product</Link></button>
            <button id={data.id} onClick={add}>Add to Cart</button>
        </div>
    )
}

export default ProdCard;