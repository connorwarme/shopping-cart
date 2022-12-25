import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../imgs/cart.png';
import '../style/Cart.css';

const Cart = ({ cart, del, inc, dec }) => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.setAttribute('id', 'cart');
    }, [])
    const calculateTotal = () => {
        let value = 0;
        cart.forEach(item => value += item.price * item.quantity);
        return value;
    }
    const checkoutBtn = () => {
        if (cart.length > 0) {
            return (
                <div className="checkout-container">
                    <p>Order Total: ${calculateTotal()}</p>
                    <button><Link to="/checkout">Checkout</Link></button>
                </div>
            )
        }
    }
    const cartLogo = () => {
        if (cart.length === 0) {
            return (
                <div className="cart-logo-container">
                    <img src={Logo} alt="Empty Shopping Cart"></img>
                </div>
            )
        }
    }
    return (
        <div className="cart-container">
        <div className="cart-content">
            <h1>Shopping Cart</h1>
            <ul>
            {cart.map(product => {
                const price = Number(product.price) * product.quantity;
                return (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.about}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: ${product.price}</p>
                        <div className="cart-buttons">
                            <button className="remove-btn" id={product.id} onClick={del}>Remove</button>
                            <button className="dec-btn" id={product.id} onClick={dec}></button>
                            <button className="inc-btn" id={product.id} onClick={inc}></button>
                        </div>
                        <p className="cart-item-total">Total: ${price}</p>
                    </li>
                )
            })}
            </ul>
            <div>{cartLogo()}</div>
            <div className="cart-total">{checkoutBtn()}</div>
            </div>
        </div>
    )
}

export default Cart;