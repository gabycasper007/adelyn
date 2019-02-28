import React, { Component } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSidedrawer: true
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSidedrawer: false });
  };
  render() {
    return (
      <>
        <div>
          <Toolbar />
          <SideDrawer
            open={this.state.showSidedrawer}
            hideBackdrop={this.sideDrawerClosedHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}
export default Layout;
