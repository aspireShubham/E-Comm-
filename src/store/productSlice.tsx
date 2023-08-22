import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export enum STATUSES {
  IDLE = "idle",
  ERROR = "error",
  LOADING = "loading"
}

export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface ProductState {
  data: Product[];
  status: STATUSES;
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE
  } as ProductState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  }
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;