/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para acceder al contexto más fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex((item) => item.id === product.id);
            if (itemIndex >= 0) {
                // Si el producto ya existe, simplemente retorna el carrito sin cambios
                return prevItems;
            } else {
                // Si no existe, lo agrega al carrito con cantidad 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    // Función para ajustar la cantidad de un producto en el carrito
    const updateCartItemQuantity = (productId, quantity) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems];
            const itemIndex = updatedItems.findIndex((item) => item.id === productId);
            if (itemIndex >= 0) {
                updatedItems[itemIndex].quantity = quantity;
            }
            return updatedItems;
        });
    };

    // Función para obtener el número total de items en el carrito
    const getCartItemCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Función para obtener el total del carrito
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateCartItemQuantity,
                getCartItemCount,
                getCartTotal,
                clearCart, // Agrega la función clearCart aquí
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
