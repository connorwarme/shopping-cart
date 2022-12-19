import React from "react";

const Cart = ({cart}) => {
    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cart.map(product => {
                return (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <h5>{product.about}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;