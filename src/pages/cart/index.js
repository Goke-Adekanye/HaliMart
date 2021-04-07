import React from "react";
import "./styles/cart.css";

import CartColumn from "./cartColumn";
import CartItem from "./cartItem";
import CartTotals from "./cartTotals";

export default function Cart() {
  return (
    <>
      <CartColumn />
      <CartItem />
      <CartTotals />
    </>
  );
}
