import React from "react";
import { Link } from "react-router-dom";
import '../style/Checkout.css'; 

const Checkout = () => {
    return (
        <div className="checkout-page-container">
            <div className="checkout-content">
            <h1>Checkout Page</h1>
            <p>Awaiting logic...which I have yet to learn! Stay tuned :)</p>
            <button><Link to="/cart">Return to Cart</Link></button>
            </div>
        </div>
    )
}

export default Checkout;