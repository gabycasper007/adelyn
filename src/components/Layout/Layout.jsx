import React from "react";
const layout = props => (
  <>
    <div>Toolbar, sidebar, backdrop</div>
    <main>{props.children}</main>
  </>
);
export default layout;
