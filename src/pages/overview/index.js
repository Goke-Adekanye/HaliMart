import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CustomButton, Modal } from "../../components";
import * as ROUTES from "../../routes/routes";
import "./styles/overview.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

//createContext, useCoontext: Context provides a way to pass data{props} through the component tree
// without having to pass props down manually at every level.

export default function Overview() {
  const {
    product: { name, description, imageUrl, price, userHandle },
  } = useSelector((state) => state.data);
  const { loading } = useSelector((state) => state.ui);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {!loading ? (
        <Grid container>
          <Grid item xs={12} className="overview_title">
            <h1>{name}</h1>
          </Grid>

          <Paper className="overview_details">
            <Grid container spacing={6}>
              <Grid item xs={12} lg={5} className="overview_detailsImage">
                <img src={imageUrl} alt="product" />
              </Grid>

              <Grid item xs={12} lg={7} className="overview_detailsDescription">
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      className="overview_detailsDescriptionText border_line"
                    >
                      Brand: <span>{userHandle}</span>
                    </Typography>
                    <Typography
                      variant="h6"
                      className="overview_detailsDescriptionText border_line"
                    >
                      Price: <span>{price}</span>
                    </Typography>
                    <Typography
                      variant="h6"
                      className="overview_detailsDescriptionText border_line"
                    >
                      Product details: <span>{description}</span>
                    </Typography>
                    <Typography
                      variant="h6"
                      className="overview_detailsDescriptionText border_line"
                    >
                      Health benefits: <span>Hiiiiiiii</span>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} className="overview_buttons">
                    <Grid container spacing={2}>
                      <Grid item onClick={() => setOpenModal(true)}>
                        <CustomButton
                          icon={<AddShoppingCart />}
                          text={"Buy Now"}
                        />
                      </Grid>

                      <Grid item>
                        <Link
                          to={ROUTES.HOME}
                          style={{ textDecoration: "none" }}
                        >
                          <CustomButton text={"Continue Shopping"} />
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          {openModal && <Modal setOpenModal={setOpenModal} />}
        </Grid>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
