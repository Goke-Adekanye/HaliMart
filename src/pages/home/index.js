/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/home.css";
//MUI
import { Grid, Tab, Tabs } from "@material-ui/core";
import { getProducts } from "../../redux/actions/dataActions";
import { Product } from "../../components";

export default function Home() {
  const { products, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState("All");

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Tabs
          value={tabValue}
          indicatorColor="black"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {/* [...new Set: MAP THRU PROJECTS AND CREATE NON REPETITIVE TAG-ITEM]. THEN MAP EACH TAG TO TAB */}
          {[...new Set(products.map((item) => item.category))].map(
            (category) => (
              <Tab
                label={category}
                value={category}
                className={
                  tabValue == category
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* PROJECTS */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {!loading ? (
            products.map((product) => (
              <>
                {tabValue == product.category || tabValue == "All" ? (
                  <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Product key={product.productId} product={product} />
                  </Grid>
                ) : null}
              </>
            ))
          ) : (
            <p>Loading</p>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
