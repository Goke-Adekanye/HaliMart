import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components";
import * as ROUTES from "../../routes/routes";
import { Button, Grid } from "@material-ui/core";

export default function CartTotals() {
  return (
    <Grid container className="cartTotals">
      <Grid item className="cartTotals_item">
        <Link to={ROUTES.HOME} style={{ textDecoration: "none" }}>
          <Button
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              color: "white",
            }}
          >
            CLEAR CART
          </Button>
        </Link>
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
