import React, { Component } from "react";
import CartBox from "./CartBox";

export class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: "close",
    };
  }

  toggleCart = () => {
    if (this.state.toggle == "close") {
      this.setState({
        toggle: "open",
      });
    } else {
      this.setState({
        toggle: "close",
      });
    }
  };
  render() {
    const {
      product,
      cartArray,
      handleIncrement,
      handleDecrement,
      counters,
      cartTotal,
      getTotal,
      removeFromCart,
    } = this.props;
    const { toggle } = this.state;
    return (
      <div>
        <button className="cartButton" onClick={this.toggleCart}>
          CART
        </button>
        <CartBox
          product={product}
          cartArray={cartArray}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          counters={counters}
          cartTotal={cartTotal}
          getTotal={getTotal}
          toggle={this.state.toggle}
          removeFromCart={removeFromCart}
        />
      </div>
    );
  }
}

export default CartButton;
