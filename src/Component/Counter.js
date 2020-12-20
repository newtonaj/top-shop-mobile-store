import React, { Component } from "react";

// << counters

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleIncrement,
      handleDecrement,
      counter,
      value,
      each,
    } = this.props;

    return (
      <div>
        <div>
          <button
            onClick={() => handleDecrement(counter)}
            className="counter-decrement-btn counter-btn"
          >
            -
          </button>
          <span
            style={{
              color: "red",
              textAlign: "center",
              width: "40%",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            {value}
          </span>
          <button
            onClick={() => handleIncrement(counter)}
            className="counter-increment-btn counter-btn"
          >
            +
          </button>
        </div>
        <div style={{ color: "red", fontWeight: "bold", margin: "1px 0" }}>
          N{(each.price * value).toFixed(2)}
          {}
        </div>
      </div>
    );
  }
}

export default Counter;

{
  /* <button onClick={() => this.props.onDelete(this.props.id)}>
      delete
    </button> */
}
