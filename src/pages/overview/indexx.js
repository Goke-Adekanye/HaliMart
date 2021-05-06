import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Comment,
  CustomButton,
  CommentForm,
  AddButton,
} from "../../components";
import * as ROUTES from "../../routes/routes";
import "./styles/overview.css";

import { Grid, Paper, Typography } from "@material-ui/core";

export default function Overview() {
  const {
    product: {
      name,
      description,
      imageUrl,
      price,
      userHandle,
      category,
      productId,
      comments,
    },
  } = useSelector((state) => state.data);
  const { loading } = useSelector((state) => state.ui);
  return (
    <>
      {!loading ? (
        <Grid container>
          <Grid item xs={12} className="overview_category">
            <Typography variant="h2" className="overview_categoryText">
              {category}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper className="overview_details">
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6} className="overview_image">
                  <img src={imageUrl} alt="product" />
                </Grid>

                <Grid item xs={12} lg={6} className="overview_textSection">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h4" className="overview_name">
                        {name}
                      </Typography>

                      <Typography variant="h6" className="overview_text">
                        Brand: <span className="brand">{userHandle}</span>
                      </Typography>

                      <Typography variant="h6" className="overview_text">
                        Price: <span>${price}</span>
                      </Typography>

                      <Typography variant="h6" className="overview_text">
                        Product details: <span>{description}</span>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container spacing={2} className="overview_buttons">
                        <AddButton productId={productId} />

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

          <Grid item xs={12}>
            <Paper className="comment_paper">
              <Grid container spacing={3} className="comment_section">
                <Grid item xs={12} lg={6} className="comment_inputContainer">
                  <CommentForm productId={productId} />
                </Grid>
                <Grid item xs={12} lg={6}>
                  {comments &&
                    comments.map((comment) => (
                      <Comment key={comment.createdAt} comment={comment} />
                    ))}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
}
