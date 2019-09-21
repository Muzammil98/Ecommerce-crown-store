import React, { Component } from "react";

import SideDrawer from "./SideDrawer";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Crown from "../../resources/crown.svg";

export default class Header extends Component {
  state = {
    drawerOpen: false
  };
  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  render() {
    return (
      <AppBar
        style={{
          background: "#afcee0",
          boxShadow: "none",
          padding: "10px 0px"
        }}
        position="fixed"
      >
        <ToolBar>
          <img style={{ height: "60px" }} src={Crown} alt="icon" />
          <IconButton
            style={{ marginLeft: "auto" }}
            aria-label="Menu"
            color="inherit"
            onClick={this.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            onClose={this.toggleDrawer}
            open={this.state.drawerOpen}
            anchor="right"
          ></SideDrawer>
        </ToolBar>
      </AppBar>
    );
  }
}
