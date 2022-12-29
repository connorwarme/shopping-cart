import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import CartLogo from './imgs/cart.png';
import Menu from './imgs/menu.svg';
import { content, photo } from "./components/Content";
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState(content);
  const [cartNumber, setCartNumber] = useState(0);
  const [photog, setPhotog] = useState('Felipe Nordenflycht');

  const findIndex = (id) => {
    return cart.findIndex(item => item.id === id);
  }
  // i don't use this function.. ?
  const findProduct = (id) => {
    const product = productList.find(item => item.id === id);
    console.log(product);
    return product;
  }
  const checkQuantity = (currentQuantity, value) => {
    let check = ((currentQuantity + value) > 5) ? false : true;
    return check;
  }

  const addToCart = (e, count) => {
    let cartCopy = [...cart];
    const index = findIndex(e.target.id);
    let error = 'Quantity maximum: 5';
    let value = count ? count : 1;
    // check if item is in cart, if so, add to quantity
    if (index !== -1) {
      // check if item quantity will not exceed 5
      if (checkQuantity(cartCopy[index].quantity, value)) {
      cartCopy[index].quantity += value;
      } else {
        return [false, error];
      }
    } else {
      // if not, add to cart
      const product = findProduct(e.target.id);
      product.quantity = value;
      cartCopy = cartCopy.concat(product);    
    }
    setCart(cartCopy);
    return [true];
  }
  const removeFromCart = (e) => {
    const cartCopy = cart.filter(item => item.id !== e.target.id);
    setCart(cartCopy);
  }
  const adjustQuantity = (id, boolean) => {
    const cartCopy = [...cart];
    const index = findIndex(id);
    let value = cartCopy[index].quantity;
    if (boolean) {
      cartCopy[index].quantity = value < 5 ? value += 1 : value;
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
  const updatePhotog = (index) => {
    setPhotog(photo[index]);
  }

  useEffect(() => {
    let value = 0;
    cart.forEach(item => value += item.quantity);
    setCartNumber(value);
  }, [cart]);

  return (
    <div className="app">
      <div className="header-container">
        <div className="name-container"><Link to="/">Amity Warme</Link></div>
        <nav>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/about">About</Link></ul>
          <ul><Link to="/products">Packages</Link></ul>
          <ul><Link to="/cart"><img className="cart-logo-img" src={CartLogo} alt="Cart:"></img><div className="cart-number-bubble">{cartNumber}</div></Link></ul>
        </nav>
        <button className="mobile-menu"><img src={Menu} alt='Menu' /></button>
      </div>
      <Routes>
        <Route path="/" element={<Home photo={updatePhotog} />} />
        <Route path="/about" element={<About photo={updatePhotog} />} />
        <Route path="/products">
          <Route index element={<Products add={addToCart} prod={productList} photo={updatePhotog}/>} />
          <Route path=":id" element={<Product add={addToCart} cart={cart} />} />
        </Route>
        <Route path="/cart" element={<Cart cart={cart} del={removeFromCart} inc={increment} dec={decrement} photo={updatePhotog}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer intel={photog}/>
    </div>
  );
}

export default App;
