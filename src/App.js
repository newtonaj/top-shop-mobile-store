import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import View from "./Component/View";
import CartBox from "./Component/CartBox";
import "./Component/Style.css";
import axios from "axios";
import CartButton from "./Component/CartButton";

// >>Header Home  View CartBox
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        {
          id: 1,
          value: 1,
        },
        {
          id: 2,
          value: 1,
        },
        {
          id: 3,
          value: 1,
        },
        {
          id: 4,
          value: 1,
        },
        {
          id: 5,
          value: 1,
        },
        {
          id: 6,
          value: 1,
        },
        {
          id: 7,
          value: 1,
        },
        {
          id: 8,
          value: 1,
        },
        {
          id: 9,
          value: 1,
        },
        {
          id: 10,
          value: 1,
        },
        {
          id: 11,
          value: 1,
        },
        {
          id: 12,
          value: 1,
        },
        {
          id: 13,
          value: 1,
        },
        {
          id: 14,
          value: 1,
        },
        {
          id: 15,
          value: 1,
        },
        {
          id: 16,
          value: 1,
        },
        {
          id: 17,
          value: 1,
        },
        {
          id: 18,
          value: 1,
        },
        {
          id: 19,
          value: 1,
        },
        {
          id: 20,
          value: 1,
        },
      ],
      count: 0,
      disabled: false,
      cartItemCounter: 0,
      product: "",
      cartMsg: "",
      cartArray: [],
      total: 0,
      cartTotal: 0,

      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products?_limit=10")
      .then((res) => this.setState({ items: res.data }));
  }

  getTotal = () => {
    if (this.state.cartArray.length > 0) {
      let counters = [...this.state.counters];
      let cartArray = [...this.state.cartArray];
      let cartTotal = 0;
      let tot = [];

      cartArray.map((arr) => {
        counters.map((counter) => {
          if (counter.id == arr.id) {
            tot.push(arr.price * counter.value);
            cartTotal = tot.reduce((total, num) => {
              return total + num;
            });

            this.setState({
              cartTotal: cartTotal.toFixed(2),
            });
          }
        });
      });
    } else {
      this.setState({
        cartTotal: 0,
      });
    }
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((c) => {
        c.value = 0;
        return c;
      }),
    });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].value > 1) {
      counters[index].value--;
      this.setState({ counters });
    }
  };
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };
  select = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          this.setState({
            product: item,
          });
        }
        return item;
      }),
    });
  };

  addToCart = (product) => {
    // console.log(this.getTotal());
    const { cartArray } = this.state;

    this.setState({
      disabled: true,
    });

    if (cartArray.indexOf(product) === -1 && typeof product.id === "number") {
      this.setState((prevState) => ({
        cartArray: prevState.cartArray.concat(product),
        cartMsg: "item added to cart",
      }));
    } else if (isNaN(product.id)) {
      this.setState({
        cartMsg: "currently unable to add to cart",
      });
    } else {
      this.setState({
        cartMsg: "item already in cart",
      });
    }

    setTimeout(() => {
      this.setState({
        cartMsg: "",
        disabled: false,
      });
    }, 2000);
  };

  removeFromCart = (product) => {
    const { cartArray } = this.state;

    this.setState({
      cartArray: cartArray.filter((c) => c.id !== product.id),
      cartMsg: "item removed from cart",
    });
    setTimeout(() => {
      this.setState({
        cartMsg: "",
      });
    }, 2000);
  };

  render() {
    const {
      items,
      product,
      cartMsg,
      cartArray,
      disabled,
      counters,
      cartTotal,
    } = this.state;
    const {
      select,
      addToCart,
      handleIncrement,
      handleDecrement,
      getTotal,
      removeFromCart,
    } = this;
    return (
      <Router>
        <div className="App " style={container}>
          <Header cartArray={cartArray} />

          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <p
                  style={{
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.788)",
                    color: "white",
                    fontSize: ".7em",
                    margin: "5px 0",
                  }}
                >
                  Get Premiere Deals when you shop on the Top-Shop App
                </p>
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

                <Home items={items} select={select} cartArray={cartArray} />
              </div>
            )}
          />

          <Route
            path="/view"
            render={(props) => (
              <div>
                <View
                  items={items}
                  product={product}
                  cartMsg={cartMsg}
                  addToCart={addToCart}
                  cartArray={cartArray}
                  disabled={disabled}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  counters={counters}
                  cartTotal={cartTotal}
                  getTotal={getTotal}
                  removeFromCart={removeFromCart}
                />
              </div>
            )}
          />
        </div>
        <footer
          style={{
            height: "100px",
            backgroundColor: "rgba(0, 0, 0, 0.788)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            wordSpacing: "5px",
          }}
        >
          copyright Newton Ajoku 2020
        </footer>
      </Router>
    );
  }
}

const container = {
  background: "#eee",
  minHeight: "100vh",
};

export default App;

// .appFlex p {
//   width: 100%;
// }
