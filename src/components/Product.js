import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Product = (props) => {
    const location = useLocation();
    const obj = location.state;

    const { add } = props;

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 5) {
            let value = quantity;
            value += 1;
            setQuantity(value);
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            let value = quantity;
            console.log(typeof(value));
            value -= 1;
            setQuantity(value);
        }
    }
    const handleChange = (e) => {
        setQuantity(Number(e.target.value));
    }

    return (
        <div className="product">
            <h1>Product Page: {obj.title}</h1>
            <p>{obj.about}</p>
            <button id={obj.id} onClick={add}>Add to Cart</button>
            <button onClick={decrement}> - </button>
            <input type="number" value={quantity} onChange={handleChange} min="1" max="5"></input>
            <button onClick={increment}> + </button>
            
        </div>
    )
}

export default Product;