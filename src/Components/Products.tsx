import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import LoadingSpinner from "./LoadingSpinner";
import { fetchProducts, STATUSES } from "../store/productSlice"; // Make sure you import these only once
import RootState from "./types";
// import { ProductState } from "../store/productSlice"; // Import the ProductState interface
import { Product } from "../store/productSlice";

const Products: FC = () => {
  const dispatch = useDispatch();


  const { data: products, status } = useSelector(
    (state: RootState) => state.product 
  );

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);

  const handleAdd = (product : Product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <LoadingSpinner size="80px" color="#e74c3c" />;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something Went Wrong</h2>;
  }

  return (
    <div>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;