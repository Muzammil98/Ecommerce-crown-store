import React from "react";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import InfoIcon from "@material-ui/icons/Info";

function SideDrawer(props) {
  return (
    <Drawer onClose={props.onClose} open={props.open} anchor="right">
      <List style={{ padding: "20px" }} component="nav">
        <Link to="/">
          <ListItem button>
            <HomeIcon />
            Home
          </ListItem>
        </Link>
        <Link to="/signin">
          <ListItem button>
            <EmojiEventsIcon />
            Sign In
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button>
            <InfoIcon />
            About
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
