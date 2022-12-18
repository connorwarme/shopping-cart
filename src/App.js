import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import './App.css';

function App() {
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
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
