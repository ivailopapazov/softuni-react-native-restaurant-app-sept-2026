import { CartContext } from "./CartContext";
import usePersistedState from "../../hooks/usePersistedState";
import { useMemo } from "react";

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = usePersistedState("cart", []);

    const addToCart = (item, options) => {
        setCartItems((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (index) => {
        setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const totalOrderPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0);
    }, [cartItems]);

    // TODO: Use reducers
    const incrementQty = (index) => {
        setCartItems((prevCart) =>
            prevCart.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        options: { ...item.options, qty: item.options.qty + 1 },
                        totalPrice: item.unitPrice * (item.options.qty + 1)
                    }
                    : item
            )
        );
    };

    const decrementQty = (index) => {
        setCartItems((prevCart) =>
            prevCart.map((item, i) => i === index
                ? {
                    ...item,
                    options: { ...item.options, qty: item.options.qty - 1 },
                    totalPrice: item.unitPrice * (item.options.qty - 1)
                }
                : item
            )
        );
    };

    const value = { cartItems, addToCart, removeFromCart, incrementQty, decrementQty, totalOrderPrice };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
