import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, del, inc, dec }) => {
    const checkoutBtn = () => {
        if (cart.length > 0) {
            return (
                <button><Link to="/checkout">Checkout</Link></button>
            )
        }
    }
    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <ul>
            {cart.map(product => {
                return (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <h5>{product.about}</h5>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: {product.price}</p>
                        <button id={product.id} onClick={del}>Remove</button>
                        <button id={product.id} onClick={dec}>Decrement</button>
                        <button id={product.id} onClick={inc}>Increment</button>
                    </li>
                )
            })}
            </ul>
            <div>{checkoutBtn()}</div>
        </div>
    )
}

export default Cart;