import React from "react";
import "./styles/cart.css";
import { Grid } from "@material-ui/core";

export default function CartColumn() {
  return (
    <Grid container className="cart_column">
      <Grid item className="column_text">
        <p>PRODUCT</p>
      </Grid>

      <Grid item className="column_text">
        <p>ITEM NAME</p>
      </Grid>

      <Grid item className="column_text">
        <p>PRICE</p>
      </Grid>

      <Grid item className="column_text">
        <p>QUANTITY</p>
      </Grid>

      <Grid item className="column_text">
        <p>REMOVE</p>
      </Grid>

      <Grid item className="column_text">
        <p>TOTAL</p>
      </Grid>
    </Grid>
  );
}
