import React from "react";
import { CustomButton } from "../../components";
import { Button, Grid } from "@material-ui/core";

export default function CartTotals() {
  return (
    <Grid container className="cartTotals">
      <Grid item className="cartTotals_item">
        <Button
          style={{
            backgroundColor: "red",
            fontWeight: "bold",
            color: "white",
          }}
        >
          CLEAR CART
        </Button>
      </Grid>
      <Grid item className="cartTotals_item">
        <p>subtotal: $110</p>
      </Grid>
      <Grid item className="cartTotals_item">
        <p>tax: $110</p>
      </Grid>
      <Grid item className="cartTotals_item">
        <p>subtotal: $110</p>
      </Grid>
      <Grid item className="cartTotals_item">
        <CustomButton text="Checkout" />
      </Grid>
    </Grid>
  );
}
