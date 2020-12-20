import React, { Component } from "react";
import Counters from "./Counters";

// << appjs && view
// >> counters

export class CartBox extends Component {
  checkWidth = () => {
    if (this.props.toggle == "close") {
      return {
        width: "0px",
        display: "none",
        position: "absolute",
        zIndex: "-1",
        height: "0",
        // transition: "width 20s , display 20s ",
      };
    } else if (this.props.toggle == "open") {
      return {
        width: "90%",
        display: "block",
        backgroundColor: "#eee",
        boxShadow: "1px 2px 6px",
        borderRadius: "0 10px 10px 0",
        position: "absolute",
        margin: "5px 0",
        zIndex: "1",
        height: "70vh",
        overflowY: "scroll",
        // transition: "width 20s , display 20s ",
      };
    }
  };

  render() {
    const {
      counters,
      cartArray,
      handleIncrement,
      handleDecrement,
      cartTotal,
      getTotal,
      removeFromCart,
      product,
      toggle,
    } = this.props;
    console.log(toggle);
    return (
      <section style={this.checkWidth()}>
        <div style={{ margin: "10px 0" }}>
          <button onClick={getTotal} className="cartbox-btn btn-hover">
            CHECK OUT
          </button>
          <span
            style={{
              backgroundColor: "white",
              width: "200px",
              display: "inline-block",
              padding: "10px 5px",
              margin: "5px  10px",
              borderRadius: "5px",
              fontWeight: "bold",
              color: "red",
              textAlign: "center",
            }}
          >
            N{cartTotal}
          </span>
        </div>
        <div className="cartbox-container">
          {cartArray.map((each) => (
            <div key={each.id}>
              <div className=" cartbox-content">
                <div>
                  <div>
                    <img
                      src={each.image}
                      alt="chosen items"
                      style={{ width: "40px", height: "50px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: ".7em",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "100%",
                      padding: "0 5px",
                      color: "rgb(97, 95, 95)",
                    }}
                  >
                    {each.title}
                  </p>
                </div>
                <div>
                  <Counters
                    each={each}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    counters={counters}
                    // getTotal={getTotal}
                    cartArray={cartArray}
                  />
                  <button
                    className="cartbox-remove-btn btnhover"
                    onClick={() => removeFromCart(each)}
                  >
                    REMOVE FROM CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default CartBox;
