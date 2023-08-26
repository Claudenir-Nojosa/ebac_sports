import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/cart'
import favoritosReducer from './reducers/favorites'

import api from '../util/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
