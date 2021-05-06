import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "..";

import { AddShoppingCart } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { addProduct } from "../../redux/actions/dataActions";

export default function AddButton({ productId }) {
  const { cart, authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addedProduct = () => {
    if (cart && cart.find((item) => item.productId === productId)) return true;
    else return false;
  };

  const addItem = () => {
    dispatch(addProduct(productId));
  };

  const addButton = !authenticated ? (
    <Link to="/signin" style={{ textDecoration: "none" }}>
      <CustomButton icon={<AddShoppingCart />} text={"Buy Now"} />
    </Link>
  ) : addedProduct() ? (
    <CustomButton text={"InCart"} disabled />
  ) : (
    <div onClick={addItem}>
      <CustomButton icon={<AddShoppingCart />} text={"Buy Now"} />
    </div>
  );

  return <Grid item>{addButton}</Grid>;
}
