import React, { Component } from "react";

// << header

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { totalCounters } = this.props;
    return <div style={carticon}>{totalCounters}</div>;
  }
}

const carticon = {
  backgroundColor: " white",
  fontSize: "1rem",
  fontWeight: "bold",
  width: "50px",
  height: "50px",
  color: "grey",
  display: "inline-flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  borderRadius: " 50% 0 0 50% ",
  boxShadow: " 1px 3px 4px",
};

export default Cart;
