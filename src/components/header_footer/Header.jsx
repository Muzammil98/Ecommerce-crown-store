import React, { Component } from "react";

import SideDrawer from "./SideDrawer";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

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
          background: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px"
        }}
        position="fixed"
      >
        <ToolBar>
          <h2>Crown Store</h2>
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
