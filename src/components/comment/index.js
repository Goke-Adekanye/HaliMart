import React from "react";
import dayjs from "dayjs";
import "./styles/comment.css";
import { Grid, Typography } from "@material-ui/core";

export default function Comment({ comment: { userHandle, createdAt, body } }) {
  return (
    <Grid container spacing={2} className="comment">
      <Grid item sm={2}>
        <img
          src="/images/person.jpg"
          alt="person"
          style={{ width: "5rem", height: "5rem" }}
        />
      </Grid>
      <Grid item sm={9}>
        <div className="description">
          <Typography variant="h6" className="comment_handle">
            {userHandle}
          </Typography>
          <small className="comment_time">
            {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
          </small>
        </div>
        <p>{body}</p>
      </Grid>
    </Grid>
  );
}
