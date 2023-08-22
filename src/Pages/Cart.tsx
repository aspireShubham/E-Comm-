import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import RootState from "../Components/types";

const Cart: FC = () => {
  const products = useSelector((state : RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id :any) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h1>CartItem</h1>
      <div className="cartWrapper">
        {products.map((product, id) => (
          <div className="cartCard" key={id}>
            <img src={product.image} alt="img-load" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;