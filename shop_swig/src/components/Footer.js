import Typography from "@material-ui/core/Typography";
import React from "react";
import "./FoodList.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <Typography variant="h5" component="h2">
          SHOP SWIGGY: Shopify for Swiggy
        </Typography>
      </div>
      <div>
        <div className="socials">
          <LinkedInIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
      <div>
        <Typography gutterBottom variant="p" component="h4">
          About us <br/>
          Privacy Policy <br/>
          What we do <br/>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
