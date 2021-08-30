import React from "react";
import "./FoodList.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LinearProgress from "@material-ui/core/LinearProgress";

const Reviews = (props) => {
  console.log("the props are", props);
  return (
    <div className="Reviews-Box">
      <div className="Review">
        <List component="nav" className="List" aria-label="contacts">
          {props.Reviews.map((index, idx) => (
            <ListItem key={idx} className="Grade">
              <ListItemText primary={index.score} />
              <LinearProgress
                value={(index.score / 15) * 100}
                variant="determinate"
                className="Progress"
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Reviews;
