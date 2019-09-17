import React from "react";
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
        <ListItem button>
          <HomeIcon />
          Home
        </ListItem>
        <ListItem button>
          <EmojiEventsIcon />
          Section
        </ListItem>
        <ListItem button>
          <InfoIcon />
          About
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
