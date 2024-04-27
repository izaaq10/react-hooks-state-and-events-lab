import React from "react";
import { useState } from "react";
function Item({ name, category }) {
  const [isBought, Purchased] = useState(false)
const Class = isBought ? "in-cart": ""
const BtnClass = isBought ? "remove": "add"
const BtnText = isBought? "Remove from Cart":"Add to Cart"
function HandleBoughtThings(){
  Purchased(!isBought)
}
  return (
    <li className={Class}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={BtnClass} onClick={HandleBoughtThings}>{BtnText}</button>
    </li>
  );
}

export default Item;
