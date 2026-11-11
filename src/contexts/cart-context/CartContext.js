import { createContext } from "react";

export const CartContext = createContext({
    cartItems: [],
    addToCart(item) {},
    removeFromCart(index) {},
    incrementQty(index) {},
    decrementQty(index) {},
});
