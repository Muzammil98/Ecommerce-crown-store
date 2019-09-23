import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.styles.scss";

import { auth } from "../../firebase/firebase.utils";
import SideDrawer from "./SideDrawer";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Crown from "../../resources/crown.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  render() {
    const { currentUser } = this.props;

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
          <Link to="/">
            <img style={{ height: "60px" }} src={Crown} alt="icon" />
          </Link>

          {currentUser ? (
            <Link className="option sign" onClick={() => auth.signOut()}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="option sign" to="/signin">
              SIGN IN
            </Link>
          )}
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
