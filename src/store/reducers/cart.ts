import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface CarrinhoProps {
  itens: Produto[]
}

const cartInitialState: CarrinhoProps = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addToCart } = carrinhoSlice.actions
export default carrinhoSlice.reducer
