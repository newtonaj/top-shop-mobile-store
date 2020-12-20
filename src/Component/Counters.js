import React, { Component } from "react";
import Counter from "./Counter";

// << CartBox
// >> counter

class Counters extends Component {
  render() {
    const {
      handleIncrement,
      handleDecrement,
      counters,
      each,
      cartArray,
    } = this.props;
    return (
      <section>
        {/* <button onClick={this.props.onReset}>reset</button> */}
        {counters.map((counter) => {
          if (counter.id == each.id) {
            return (
              <Counter
                key={counter.id}
                value={counter.value}
                id={counter.id}
                // onDelete={this.props.onDelete}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                counter={counter}
                each={each}
                cartArray={cartArray}
              />
            );
          }
        })}
      </section>
    );
  }
}

export default Counters;
