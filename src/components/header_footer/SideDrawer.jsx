import React from "react";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// import HomeIcon from "@material-ui/icons/Home";
// import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
// import InfoIcon from "@material-ui/icons/Info";

function SideDrawer(props) {
  return (
    <Drawer onClose={props.onClose} open={props.open} anchor="right">
      <List style={{ padding: "20px" }} component="nav">
        <Link style={{ textDecoration: "none" }} to="/shop">
          <ListItem button>SHOP</ListItem>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/signin">
          <ListItem button>SIGN IN</ListItem>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <ListItem button>CONTACT</ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
