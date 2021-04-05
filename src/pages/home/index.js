/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import productList from "../../utils/productList";
import "./styles/home.css";
import * as ROUTES from "../../routes/routes";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

export default function Home() {
  const history = useHistory();
  const [tabValue, setTabValue] = useState("All");

  const handleOverview = () => {
    history.push(ROUTES.OVERVIEW);
  };
  return (
    <Grid container className="">
      <Grid item xs="12">
        <Tabs
          value={tabValue}
          indicatorColor="white"
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
          {[...new Set(productList.products.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* PROJECTS */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {productList.products.map((product) => (
            <>
              {tabValue == product.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card className="customCard" onClick={handleOverview}>
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={product.image}
                          title={product.title}
                        />
                        <CardContent className="customCard_footer">
                          <Typography
                            variant="body2"
                            className="customCard_title"
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {product.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
