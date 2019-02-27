import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = props => (
  <>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0
      }}
    >
      {props.children}
    </div>
    <Backdrop show={props.show} hideBackdrop={props.hideBackdrop} />
  </>
);

export default Modal;
