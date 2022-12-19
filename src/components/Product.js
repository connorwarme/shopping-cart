import React from "react";
import { useLocation } from "react-router-dom";

const Product = (props) => {
    const location = useLocation();
    const obj = location.state;

    const { add } = props;

    return (
        <div className="product">
            <h1>Product Page: {obj.title}</h1>
            <p>{obj.about}</p>
            <button id={obj.id} onClick={add}>Add to Cart</button>
        </div>
    )
}

export default Product;