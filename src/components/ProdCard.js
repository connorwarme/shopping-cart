import React from "react";
import { Link } from "react-router-dom";

const ProdCard = ({ data, add, view }) => {
    const master = [data, add]
    return (
        <div className="product-card" id={data.id}>
            <h1>{data.title}</h1>
            <p>{data.about}</p>
            <div className="product-buttons">
                <button className="view" id={data.id} onClick={view}><Link to={`/products/${data.url}`} state={data}>View Product</Link></button>
                <button className="add-to-cart" id={data.id} onClick={add}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProdCard;