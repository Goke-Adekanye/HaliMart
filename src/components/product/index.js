import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grow,
  Typography,
} from "@material-ui/core";
import "./styles/product.css";

export default function Product({ product: { imageUrl, name, price } }) {
  return (
    <Grow in timeout={1000}>
      <Card className="customCard">
        <CardActionArea>
          <CardMedia
            className="customCard_image"
            title={name}
            image={imageUrl}
          />

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
