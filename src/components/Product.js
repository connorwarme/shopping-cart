import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Product = (props) => {
    const location = useLocation();
    const obj = location.state;
    const add = props.add;
    const adjust = props.adjust;
    const cart = props.cart;

    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');

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
    const checkNumber = (input) => {
        if (input < 1) {
            setError('Quantity minimum: 1');
        } else if (input > 5) {
            setError('Quantity maximum: 5');
        } else {
            setError('');
            return true;
        }
    }
    const handleChange = (e) => {
        setQuantity(Number(e.target.value));
        checkNumber(Number(e.target.value));
    }
    const handleAdd = (e) => {
        console.log(error.length);
        if (error.length === 0) {
            add(e, quantity);
        }
        console.log('fire');
    }

    return (
        <div className="product">
            <h1>Product Page: {obj.title}</h1>
            <p>{obj.about}</p>
            <button id={obj.id} onClick={handleAdd}>Add to Cart</button>
            <button onClick={decrement}> - </button>
            <input type="number" value={quantity} onChange={handleChange} min="1" max="5"></input>
            <button onClick={increment}> + </button>
            <span>{error}</span>
            
        </div>
    )
}

export default Product;