// types.ts
import { CartItem } from "../store/cartSlice"; // Adjust the path if needed
import { ProductState } from "../store/productSlice"; // Adjust the path if needed
// Import other state slices as needed

interface RootState {
  cart: CartItem[]; 
  product: ProductState; 
}

export default RootState;