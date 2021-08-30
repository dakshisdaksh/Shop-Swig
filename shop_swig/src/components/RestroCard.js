import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Reviews from "./Reviews";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [review, setReview] = useState(false);
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        width="250"
        image={props.Image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.Name}
        </Typography>
        <Typography gutterBottom variant="h3" component="h2">
          {props.Type}
        </Typography>
        <Typography variant="body2" component="p">
          {props.Address}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.Budget}
        </Typography>
      </CardContent>
      <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setReview(true)}
          >
            Reviews
          </Button>
        <Button size="small" variant="contained">
          Get It Now!!
        </Button>
      </CardActions>
      {review && <Reviews Reviews={props.Grades} />}
    </Card>
  );
}
