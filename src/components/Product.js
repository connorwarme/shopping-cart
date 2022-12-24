import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Add from '../imgs/cart-check.png';
import '../style/Product.css';

const Product = (props) => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.setAttribute('id', 'product');
    }, [])
    const location = useLocation();
    const obj = location.state;
    const add = props.add;

    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');

    const increment = () => {
        if (quantity < 5) {
            let value = quantity + 1;
            setQuantity(value);
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            let value = quantity - 1;
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
    const addedDisplay = (dom) => {
        dom.textContent = '';
        const photo = document.createElement('img');
        photo.src = Add;
        photo.alt = "Added ✔️";
        dom.appendChild(photo);
        dom.classList.add('add-check');
    }
    const normalDisplay = (dom) => {
        dom.removeChild(dom.firstChild);
        dom.textContent = "Add to Cart";
        dom.classList.remove('add-check');
    }
    const handleAdd = (e) => {
        console.log(error.length);
        if (error.length === 0) {
            add(e, quantity);
            addedDisplay(e.target);
            setTimeout(() => {normalDisplay(e.target)}, 1000);
        }
    }
    return (
        <div className="product-container">
            <div className="product">
                <h1>Package: {obj.title}</h1>
                <p>{obj.about}</p>
                <p>Price: ${obj.price}</p>
                <div className="adjust-container">
                    <button onClick={decrement}> - </button>
                    <input type="number" value={quantity} onChange={handleChange} min="1" max="5"></input>
                    <button onClick={increment}> + </button>
                    <span>{error}</span>
                </div>
                <button className="product-add-btn" id={obj.id} onClick={handleAdd}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;