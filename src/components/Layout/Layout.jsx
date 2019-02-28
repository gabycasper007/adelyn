import React, { Component } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSidedrawer: false
  };
  toggleSidedrawerHandler = () => {
    this.setState(prevState => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  };
  render() {
    return (
      <>
        <div>
          <Toolbar showMenu={this.toggleSidedrawerHandler} />
          <SideDrawer
            open={this.state.showSidedrawer}
            hideBackdrop={this.toggleSidedrawerHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}
export default Layout;
