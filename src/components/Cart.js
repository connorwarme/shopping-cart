import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, del, inc, dec }) => {
    const calculateTotal = () => {
        let value = 0;
        cart.forEach(item => value += item.price * item.quantity);
        return value;
    }
    const checkoutBtn = () => {
        if (cart.length > 0) {
            return (
                <div>
                    <p>Order Total: ${calculateTotal()}</p>
                    <button><Link to="/checkout">Checkout</Link></button>
                </div>
            )
        }
    }
    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <ul>
            {cart.map(product => {
                const price = Number(product.price) * product.quantity;
                return (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <h5>{product.about}</h5>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: ${product.price}</p>
                        <p>Total: ${price}</p>
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