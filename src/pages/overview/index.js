import React from "react";
import { Link } from "react-router-dom";
import productList from "../../utils/productList";
import { CustomButton } from "../../components";
import * as ROUTES from "../../routes/routes";
import "./styles/overview.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

export default function Overview() {
  return (
    <>
      {productList.products
        .filter((product) => product.id === 2)
        .map((item) => (
          <Grid container className="">
            <Grid item xs={12} className="overview_title">
              <h1>{item.title}</h1>
            </Grid>

            <Paper className="overview_details">
              <Grid container spacing={6}>
                <Grid item xs={12} lg={5} className="overview_detailsImage">
                  <img src={item.image} alt="product" />
                </Grid>

                <Grid
                  item
                  xs={12}
                  lg={7}
                  className="overview_detailsDescription"
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        className="overview_detailsDescriptionText border_line"
                      >
                        Brand: <span>{item.brand}</span>
                      </Typography>
                      <Typography
                        variant="h6"
                        className="overview_detailsDescriptionText border_line"
                      >
                        Price: <span>{item.price}</span>
                      </Typography>
                      <Typography
                        variant="h6"
                        className="overview_detailsDescriptionText border_line"
                      >
                        Product details: <span>{item.description}</span>
                      </Typography>
                      <Typography
                        variant="h6"
                        className="overview_detailsDescriptionText border_line"
                      >
                        Health benefits: <span>{item.caption}</span>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} className="overview_buttons">
                      <Grid container spacing={2}>
                        <Grid item>
                          <CustomButton
                            icon={<AddShoppingCart />}
                            text={"ADD TO CART"}
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
          </Grid>
        ))}
    </>
  );
}
