import {  fetchUser, fetchCart  } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: null,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo
};