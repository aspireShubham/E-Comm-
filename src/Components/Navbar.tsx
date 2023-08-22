import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RootState from "./types";

const Navbar: FC = () => {
  const items = useSelector((state : RootState) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <span>Redux store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>{" "}
        <Link className="navLink" to="/cart">
          Cart
        </Link>{" "}
        <br />
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;