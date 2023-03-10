import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Package from "./components/Package";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import CartLogo from "./imgs/cart.png";
import Menu from "./imgs/menu.svg";
import { content, photo } from "./components/Content";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState(content);
  const [cartNumber, setCartNumber] = useState(0);
  const [photog, setPhotog] = useState("Felipe Nordenflycht");
  const [extension, setExtension] = useState("false");

  const findIndex = (id) => {
    return cart.findIndex((item) => item.id === id);
  };
  // i don't use this function.. ?
  const findProduct = (id) => {
    const product = productList.find((item) => item.id === id);
    console.log(product);
    return product;
  };
  const checkQuantity = (currentQuantity, value) => {
    let check = currentQuantity + value > 5 ? false : true;
    return check;
  };

  const addToCart = (e, count) => {
    let cartCopy = [...cart];
    const index = findIndex(e.target.id);
    let error = "Quantity maximum: 5";
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
  };
  const removeFromCart = (e) => {
    const cartCopy = cart.filter((item) => item.id !== e.target.id);
    setCart(cartCopy);
  };
  const adjustQuantity = (id, boolean) => {
    const cartCopy = [...cart];
    const index = findIndex(id);
    let value = cartCopy[index].quantity;
    if (boolean) {
      cartCopy[index].quantity = value < 5 ? (value += 1) : value;
    } else {
      cartCopy[index].quantity -= 1;
    }
    setCart(cartCopy);
    return index;
  };
  const increment = (e) => {
    adjustQuantity(e.target.id, true);
  };
  const decrement = (e) => {
    const index = adjustQuantity(e.target.id, false);
    if (cart[index].quantity === 0) {
      removeFromCart(e);
    }
  };
  const updatePhotog = (index) => {
    setPhotog(photo[index]);
  };
  const menuFn = () => {
    const dom = document.querySelector("div.app");
    if (extension === "false") {
      dom.children[1].style.display = "flex";
      setExtension("true");
    } else {
      dom.children[1].style.display = "none";
      setExtension("false");
    }
  };
  useEffect(() => {
    let value = 0;
    cart.forEach((item) => (value += item.quantity));
    setCartNumber(value);
  }, [cart]);

  return (
    <div className="app">
      <div className="header-container">
        <button className="mobile-menu">
          <img src={Menu} alt="Menu" onClick={menuFn} />
        </button>
        <div className="name-container">
          <Link to="/shopping-cart/">Amity Warme</Link>
        </div>
        <nav>
          <ul>
            <Link to="/shopping-cart/">Home</Link>
          </ul>
          <ul>
            <Link to="/shopping-cart/about">About</Link>
          </ul>
          <ul>
            <Link to="/shopping-cart/packages">Packages</Link>
          </ul>
          <ul>
            <Link className="checkout-box" to="/shopping-cart/cart">
              <img className="cart-logo-img" src={CartLogo} alt="Cart:"></img>
              <div className="cart-number-bubble">{cartNumber}</div>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="menu-extension">
        <NavLink to="/shopping-cart/" onClick={menuFn}>
          Home
        </NavLink>
        <NavLink to="/shopping-cart/about" onClick={menuFn}>
          About
        </NavLink>
        <NavLink to="/shopping-cart/packages" onClick={menuFn}>
          Packages
        </NavLink>
        <NavLink to="/shopping-cart/cart" onClick={menuFn}>
          Cart
        </NavLink>
      </div>
      <Routes>
        <Route path="/shopping-cart/" element={<Home photo={updatePhotog} />} />
        <Route path="/shopping-cart/about" element={<About photo={updatePhotog} />} />
        <Route path="/shopping-cart/packages">
          <Route
            index
            element={
              <Packages
                add={addToCart}
                prod={productList}
                photo={updatePhotog}
              />
            }
          />
          <Route
            path=":id"
            element={
              <Package add={addToCart} cart={cart} photo={updatePhotog} />
            }
          />
        </Route>
        <Route
          path="/shopping-cart/cart"
          element={
            <Cart
              cart={cart}
              del={removeFromCart}
              inc={increment}
              dec={decrement}
              photo={updatePhotog}
            />
          }
        />
        <Route path="/shopping-cart/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer intel={photog} />
    </div>
  );
};

export default App;
