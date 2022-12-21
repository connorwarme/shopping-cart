import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="checkout">
            <h1>Checkout Page</h1>
            <p>Awaiting logic...which I have yet to learn! Stay tuned :)</p>
            <button><Link to="/cart">Return to Cart</Link></button>
        </div>
    )
}

export default Checkout;