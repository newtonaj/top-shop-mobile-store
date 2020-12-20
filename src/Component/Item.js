import { Link } from "react-router-dom";
import React, { Component } from "react";

// << Home

export class Item extends Component {
  render() {
    const { item, select, id } = this.props;
    return (
      <div className="item-container" onClick={select.bind(this, id)}>
        <Link className="link" to="/view">
          <div className="item-img-container">
            <img className="item-img" src={item.image} alt=" items display" />
          </div>
          <div className="item-paragraphs">
            <p className="first-item-par">{item.title}</p>
            <p className="second-item-par">N{item.price}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Item;
