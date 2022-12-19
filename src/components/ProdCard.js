import React from "react";

const ProdCard = ({ data, add }) => {
    return (
        <div className="product-card" id={data.id}>
            <h1>{data.title}</h1>
            <p>{data.about}</p>
            <button>View Product</button>
            <button id={data.id} onClick={add}>Add to Cart</button>
        </div>
    )
}

export default ProdCard;