import React, { Component } from "react";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

// << app
// >> cartBox
export class View extends Component {
  
  render() {
    const {
      product,
      cartMsg,
      addToCart,
      removeFromCart,
      cartArray,
      disabled,
      handleIncrement,
      handleDecrement,
      counters,
      cartTotal,
      getTotal,
    } = this.props;
    return (
      <>
        <nav className="home-link-nav">
          <Link to="/" className="home-link">
            Back
          </Link>
        </nav>
        <CartButton
          product={product}
          cartArray={cartArray}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          counters={counters}
          cartTotal={cartTotal}
          getTotal={getTotal}
          removeFromCart={removeFromCart}
        />

        <div style={{ margin: "10px", color: "rgb(51, 51 , 51)" }}>
          <div className="test">
            <div>
              <div
                style={{
                  padding: "10px",
                  background: "white",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    width: "100px",
                    display: "block",
                    margin: "10px auto",
                  }}
                  src={product.image}
                  alt="product display"
                />
                <p>{product.title}</p>
                <p style={{ fontSize: ".9rem" }}>
                  category : {product.category}
                </p>
                <p className="view-price">N{product.price}</p>
                <button
                  id="addToCartBtn"
                  onClick={() => addToCart(product)}
                  disabled={disabled}
                  className="viewbtn "
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => removeFromCart(product)}
                  className="viewbtn "
                >
                  REMOVE FROM CART
                </button>
                <p
                  style={{
                    margin: "5px",
                    height: "20px",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {cartMsg}
                </p>
              </div>
              <div
                style={{
                  padding: "20px 10px",
                  background: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
              >
                <h5
                  style={{
                    margin: "10px 0",
                    color: "red",
                  }}
                >
                  PROMOTIONS
                </h5>
                <p>
                  Buy airtime & data on the Pay app and get up to N2,500 cash
                  back. Use code "MOB6"
                </p>
                <p>
                  Prime Plus+ : Enjoy Free Delivery on all Local items and Food
                  orders
                </p>
                <p>
                  Enjoy cheaper shipping fees when you select a PickUp Station
                  at checkout
                </p>
              </div>
              <div
                style={{
                  padding: "20px 10px",
                  background: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
              >
                <h5
                  style={{
                    margin: "10px 0",
                    color: "red",
                  }}
                >
                  DELIVERY & RETURNS
                </h5>
                <div>
                  <h6
                    style={{
                      color: "gray",
                      margin: "5px 0",
                    }}
                  >
                    Express
                  </h6>
                  <p> Free Shipping on Express orders aboveN12000 in Lagos. </p>
                </div>
                <div>
                  <h6
                    style={{
                      color: "gray",
                      margin: "5px 0",
                    }}
                  >
                    Delivery Information
                  </h6>
                  <p>Please check the dates in the Checkout page</p>
                </div>
                <div>
                  <h6
                    style={{
                      color: "gray",
                      margin: "5px 0",
                    }}
                  >
                    Return Policy
                  </h6>
                  <p>
                    Free return within 15 days for Mall items and & days for
                    other eligible items
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "20px 10px",
                  background: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
              >
                <h5
                  style={{
                    margin: "10px 0",
                    color: "red",
                    textTransform: "uppercase",
                  }}
                >
                  Product Description
                </h5>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default View;
