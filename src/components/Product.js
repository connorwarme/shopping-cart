import React from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
    const location = useLocation();
    // const [obj, add] = useLocation().state;
    console.log(location);
    return (
        <div className="product">
            <h1>Product Page: {}</h1>
        </div>
    )
}

export default Product;