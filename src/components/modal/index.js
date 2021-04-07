import React from "react";
import { Link } from "react-router-dom";
import "./styles/modal.css";
import productList from "../../utils/productList";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { CustomButton } from "..";

export default function Modal({ id, setOpenModal }) {
  return (
    <Dialog open={setOpenModal} onClose={() => setOpenModal(false)}>
      {productList.products
        .filter((product) => product.id === id)
        .map((item) => (
          <Grid container spacing={1} className="modal">
            <Grid item xs={12}>
              <DialogTitle className="modal_title">
                <Typography variant="h4">
                  <span>{item.title} Added To Cart</span>
                </Typography>
              </DialogTitle>
            </Grid>

            <DialogContent>
              <Grid item xs={12} className="modal_image">
                <img src={item.image} alt="product" />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="modal_text">
                  <span>{item.title}</span>
                </Typography>
                <Typography variant="h6" className="modal_text">
                  <span>{item.price}</span>
                </Typography>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Grid item xs={12} className="modal_button">
                <Grid container spacing={1}>
                  <Grid item onClick={() => setOpenModal(false)}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <CustomButton text="Store" />
                    </Link>
                  </Grid>

                  <Grid item onClick={() => setOpenModal(false)}>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <CustomButton text="Goto Cart" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </DialogActions>
          </Grid>
        ))}
    </Dialog>
  );
}
