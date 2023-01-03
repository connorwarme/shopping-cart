import React from "react";
import { Link } from "react-router-dom";
import Add from "../imgs/cart-check.png";
import Close from "../imgs/close.png";

const ProdCard = ({ data, add, view }) => {
  const addedDisplay = (dom, boolean) => {
    dom.textContent = "";
    let photo = document.createElement("img");
    if (boolean) {
      photo.src = Add;
      photo.alt = "Added ✔️";
      dom.classList.add("add-check");
    } else {
      photo.src = Close;
      photo.alt = "Quantity max: 5";
      dom.classList.add("add-close");
    }
    dom.appendChild(photo);
  };
  const normalDisplay = (dom, boolean) => {
    dom.removeChild(dom.firstChild);
    dom.textContent = "Add to Cart";
    let text = boolean ? "add-check" : "add-close";
    dom.classList.remove(text);
  };
  const addToCartVisual = (e) => {
    const report = add(e);
    console.log(report);
    if (report[0] === true) {
      addedDisplay(e.target, true);
      setTimeout(() => {
        normalDisplay(e.target, true);
      }, 1000);
    } else {
      addedDisplay(e.target, false);
      setTimeout(() => {
        normalDisplay(e.target, false);
      }, 1000);
      console.log(report[1]);
    }
  };
  return (
    <div className="product-card" id={data.id}>
      <h1>{data.title}</h1>
      <p>{data.about}</p>
      <div className="product-buttons">
        <button className="view" id={data.id} onClick={view}>
          <Link to={`/products/${data.url}`} state={data}>
            View Product
          </Link>
        </button>
        <button className="add-to-cart" id={data.id} onClick={addToCartVisual}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProdCard;
