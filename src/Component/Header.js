import React from "react";
import CartIcon from "./CartIcon";

// << appjs
// >> cartIcon
function Header({ cartArray }) {
  return (
    <header
      style={{
        backgroundColor: "red",

        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0px 10px 15px",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ letterSpacing: ".10rem", color: "white" }}>
          Top-Shop Online Store
        </h3>
        <p style={{ fontSize: ".75rem", color: "white" }}>
          Your number 1 stop for fashion items
        </p>
      </div>

      <div>
        <CartIcon totalCounters={cartArray.length} />
      </div>
    </header>
  );
}
const header = {};
const logo = {};
const para = {};

export default Header;
