import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          width="300"
          image={props.Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Name}
          </Typography>
          <Typography gutterBottom variant="h3" component="h2">
            {props.Price}
          </Typography>
          <Typography variant="body2" component="p">
            {props.Type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Get It Now!
        </Button>
      </CardActions>
    </Card>
  );
}
