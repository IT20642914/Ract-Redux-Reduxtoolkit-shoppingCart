import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Product {
    id: number,
    name: string,
    price: number
  }
  interface PorductState{
    products:Product[];
    }
    
const initialState :PorductState= {
    products: [],
  };
  const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      getProductList: (state, action: PayloadAction<Product[]>) => {
        state.products=action.payload;
      }
     
    },
  });
  
  
  export const { getProductList } = productSlice.actions;
  export default productSlice.reducer;