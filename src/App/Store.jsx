import { configureStore } from '@reduxjs/toolkit'
import changeTheme from '../Features/changeTheme'
import Selectedproductslice from '../Features/Selectedproductslice'
import Addproductslice from '../Features/Addproductslice'
import Allproductslice from '../Features/Allproductslice'

export const store = configureStore({
  reducer: {
    theme : changeTheme,
    selectedProduct: Selectedproductslice,
    addproduct : Addproductslice,
    category : Allproductslice
  },
})