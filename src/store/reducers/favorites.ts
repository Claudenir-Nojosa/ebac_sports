import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritesProps = {
  items: Produto[]
}

const favoritesInitialState: FavoritesProps = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: favoritesInitialState,
  reducers: {
    favoriteProduct: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      const existingProduct = state.items.find((p) => p.id === product.id)

      if (existingProduct) {
        state.items = state.items.filter((p) => p.id !== product.id)
      } else {
        state.items.push(product)
      }
    }
  }
})

export const { favoriteProduct } = favoritosSlice.actions
export default favoritosSlice.reducer
