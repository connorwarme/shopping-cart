import React from "react";

const ProdCard = ({ data }) => {
    return (
        <div className="product-card">
            <h1>{data.title}</h1>
            <p>{data.about}</p>
        </div>
    )
}

export default ProdCard;