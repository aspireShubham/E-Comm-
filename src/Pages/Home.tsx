import React, { FC } from "react";
import Products from "../Components/Products";

const Home: FC = () => {
  return (
    <div>
      <h2 className="heading"> welcome to redux</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;