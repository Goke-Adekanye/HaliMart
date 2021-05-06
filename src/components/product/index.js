import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as ROUTES from "../../routes/routes";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grow,
  Typography,
} from "@material-ui/core";
import "./styles/product.css";
import { getProduct } from "../../redux/actions/dataActions";

export default function Product({
  product: { imageUrl, name, price, productId },
}) {
  const dispatch = useDispatch();
  return (
    <Grow in timeout={1000}>
      <Card
        className="customCard"
        onClick={() => dispatch(getProduct(productId))}
      >
        <CardActionArea>
          <Link to={ROUTES.OVERVIEW}>
            <CardMedia
              className="customCard_image"
              title={name}
              image={imageUrl}
            />
          </Link>
          <CardContent className="customCard_content">
            <Typography variant="body2" className="customCard_name">
              {name}
            </Typography>
            <Typography variant="body2" className="customCard_price">
              <span>$</span>
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}
