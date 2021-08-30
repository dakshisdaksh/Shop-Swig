import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./FoodList.css";

const Header = () => {
  return (
    <div className="header">
      <div className="name-flex">
        <Typography variant="h5" component="h2">
          SHOP SWIGGY
        </Typography>
        <Typography variant="h6" component="h6">
          Shopify for Swiggy
        </Typography>
      </div>

      <Button variant="outlined">
        <ShoppingCartIcon />
        <Typography variant="p" component="h6">
          Cart
        </Typography>
      </Button>
    </div>
  );
};

export default Header;
