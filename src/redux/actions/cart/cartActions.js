import { CartActionTypes } from './cartActionTypes';

export const addItem = ({ item }) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});


export const removeItem = ({ item }) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
})

export const clearItem = ({ item }) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const genPastOrder = () => ({
  type: CartActionTypes.GENERATE_PAST_ORDER,
})