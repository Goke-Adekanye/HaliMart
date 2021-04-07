import React from "react";
import "./styles/cart.css";
import productList from "../../utils/productList";
import { Button, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CartItem() {
  return (
    <>
      {productList.products.map((item) => (
        //* displaying cart object and its respective properties *
        <Grid container className="cartItem">
          <Grid item className="cartItems_prop">
            <img
              src={item.image}
              style={{ width: "5rem", height: "5rem" }}
              alt="product"
              className="container-fluid"
            />
          </Grid>

          <Grid item className="cartItems_prop">
            <p>
              <span>Product:</span> {item.title}
            </p>
          </Grid>

          <Grid item className="cartItems_prop">
            <p>
              <span>Price:</span> {item.price}
            </p>
          </Grid>

          {/* increment n decrement buttons */}
          <Grid item className="cartItems_prop">
            <Grid container spacing={1} className="cartItems_count">
              <Grid item className="cartItems_countButton">
                <Button className="cartItems_countButtonii">
                  <span>-</span>
                </Button>
              </Grid>
              <Grid item className="cartItems_countButton">
                <span>1</span>
              </Grid>
              <Grid item className="cartItems_countButton">
                <Button className="cartItems_countButtonii">
                  <span>+</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* end of increment n decrement buttons */}

          <Grid item className="cartItems_prop">
            <DeleteIcon className="cartItems_icon" />
          </Grid>

          <Grid item className="cartItems_prop">
            <p>item total: $ total</p>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
