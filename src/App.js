import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import content from "./components/Content";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState(content);

  const findIndex = (id) => {
    return cart.findIndex(item => item.id === id);
  }
  const findProduct = (id) => {
    const product = productList.find(item => item.id === id);
    console.log(product);
    return product;
  }
  const addToCart = (e, count) => {
    let cartCopy = [...cart];
    const index = findIndex(e.target.id);
    // check if item is in cart, if so, add to quantity
    if (index !== -1) {
      cartCopy[index].quantity += count ? count : 1;
    } else {
      // if not, add to cart
      const product = findProduct(e.target.id);
      product.quantity = count ? count : 1;
      cartCopy = cartCopy.concat(product);    
    }
    setCart(cartCopy);
  }
  const removeFromCart = (e) => {
    const cartCopy = cart.filter(item => item.id !== e.target.id);
    setCart(cartCopy);
  }
  const adjustQuantity = (id, boolean, amount) => {
    const cartCopy = [...cart];
    console.log(cartCopy);
    const index = findIndex(id);
    console.log(index);
    if (amount) {
      cartCopy[index].quantity = amount;
    } else if (boolean) {
      cartCopy[index].quantity += 1;
    } else {
      cartCopy[index].quantity -= 1;
    }
    setCart(cartCopy);
    return index;
  }
  const increment = (e) => {
    adjustQuantity(e.target.id, true);
  }
  const decrement = (e) => {
    const index = adjustQuantity(e.target.id, false);
    if (cart[index].quantity === 0) {
      removeFromCart(e);
    }
  }
  return (
    <div className="App">
      <nav>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/about">About</Link></ul>
        <ul><Link to="/products">Products</Link></ul>
        <ul><Link to="/cart">Cart</Link></ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route index element={<Products add={addToCart} prod={productList}/>} />
          <Route path=":id" element={<Product add={addToCart} cart={cart}/>} />
        </Route>
        <Route path="/cart" element={<Cart cart={cart} del={removeFromCart} inc={increment} dec={decrement}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
