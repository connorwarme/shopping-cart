import React from "react";
import { Link } from "react-router-dom";
import Add from "../imgs/cart-check.png";

const ProdCard = ({ data, add, view }) => {
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
    const addToCartVisual = (e) => {
        add(e);
        addedDisplay(e.target);
        setTimeout(() => {normalDisplay(e.target)}, 1000);
    }
    return (
        <div className="product-card" id={data.id}>
            <h1>{data.title}</h1>
            <p>{data.about}</p>
            <div className="product-buttons">
                <button className="view" id={data.id} onClick={view}><Link to={`/products/${data.url}`} state={data}>View Product</Link></button>
                <button className="add-to-cart" id={data.id} onClick={addToCartVisual}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProdCard;