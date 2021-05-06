import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/cart.css";

import { Button, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeProduct } from "../../redux/actions/dataActions";
import {
  decrementCount,
  incrementCount,
} from "../../redux/actions/userActions";
// import { incrementCount } from "../../redux/actions/userActions";

export default function CartItem() {
  const { cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      {cart?.map((item) => (
        //* displaying cart object and its respective properties *
        <Grid container className="cartItem" key={item.productId}>
          <Grid item className="cartItems_prop">
            <img
              src={item.imageUrl}
              style={{ width: "5rem", height: "5rem" }}
              alt="product"
              className="container-fluid"
            />
          </Grid>

          <Grid item className="cartItems_prop">
            <p>
              <span>Product:</span> {item.productName}
            </p>
          </Grid>

          <Grid item className="cartItems_prop">
            <p>
              <span>Price:</span> {item.productPrice}
            </p>
          </Grid>

          {/* increment n decrement buttons */}
          <Grid item className="cartItems_prop">
            <Grid container spacing={1} className="cartItems_count">
              <Grid item className="cartItems_countButton">
                <Button
                  className="cartItems_countButtonii"
                  onClick={() => dispatch(decrementCount(item.productId))}
                >
                  <span>-</span>
                </Button>
              </Grid>
              <Grid item className="cartItems_countButton">
                <span>{item.count}</span>
              </Grid>
              <Grid
                item
                className="cartItems_countButton"
                // onClick={() => dispatch(incrementCount(item.productId))}
              >
                <Button
                  className="cartItems_countButtonii"
                  onClick={() => dispatch(incrementCount(item.productId))}
                >
                  <span>+</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* end of increment n decrement buttons */}

          <Grid item className="cartItems_prop">
            <DeleteIcon
              className="cartItems_icon"
              onClick={() => dispatch(removeProduct(item.productId))}
            />
          </Grid>

          <Grid item className="cartItems_prop">
            <p>item total: ${item.total}</p>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
