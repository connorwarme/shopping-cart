import React from "react";

const Cart = ({ cart, del, inc, dec }) => {
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
        </div>
    )
}

export default Cart;