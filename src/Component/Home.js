import React, { Component } from "react";
import Item from "./Item";

// <<appjs
// >> item
export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, select } = this.props;
    return (
      <main>
        <div
          style={{
            // margin: "15px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {items.map((item) => (
            <Item select={select} key={item.id} item={item} id={item.id} />
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
