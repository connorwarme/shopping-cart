import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddPhoto from '../imgs/cart-check.png';
import Close from "../imgs/close.png";
import '../style/Product.css';

const Product = ({ add, photo }) => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.setAttribute('id', 'product');

        photo(2);
    }, [photo])
    const location = useLocation();
    const obj = location.state;
    const addFn = add;

    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');

    const increment = () => {
        setQuantity(quantity + 1);
        checkNumber(quantity + 1);
    }
    const decrement = () => {
        setQuantity(quantity - 1);
        checkNumber(quantity - 1);
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
    const addedDisplay = (dom, boolean) => {
        dom.textContent = '';
        const photo = document.createElement('img');
        if (boolean) {
            photo.src = AddPhoto;
            photo.alt = "Added ✔️";
            dom.classList.add('package-add-check');
        } else {
            photo.src = Close;
            photo.alt = 'Quantity max: 5'
            dom.classList.add('package-add-close');
        }
        dom.appendChild(photo);
    }
    const normalDisplay = (dom, boolean) => {
        dom.removeChild(dom.firstChild);
        dom.textContent = "Add to Cart";
        let text = boolean ? 'package-add-check' : 'package-add-close';
        dom.classList.remove(text);
    }
    const handleAdd = (e) => {
        const value = Number(document.getElementsByClassName('package-input')[0].value);
        checkNumber(value);
        if (error.length === 0) {
            const report = addFn(e, quantity);
            if (report[0] === true) {
                addedDisplay(e.target, true);
                setTimeout(() => {normalDisplay(e.target, true)}, 1000);
            } else {
                addedDisplay(e.target, false);
                setTimeout(() => {normalDisplay(e.target, false)}, 1000);
            }
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
                    <input type="number" value={quantity} onChange={handleChange} min="1" max="5" className="package-input"></input>
                    <button onClick={increment}> + </button>
                    <span>{error}</span>
                </div>
                <button className="product-add-btn" id={obj.id} onClick={handleAdd}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;