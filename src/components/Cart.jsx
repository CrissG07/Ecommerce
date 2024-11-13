import { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/cart.css';
import ConfirmationModal from '../components/ConfirmationModal';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);
    const { cartItems, removeFromCart, updateCartItemQuantity, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        setIsModalOpen(true);
    };

    const handleConfirmPurchase = () => {
        setIsModalOpen(false);
        setIsPurchaseConfirmed(true);
        alert("Compra realizada");
        clearCart(); // Vacía el carrito
        navigate('/products'); // Redirige a la lista de productos
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            <div className="carrito-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="carrito-item">
                        <img src={item.image} alt={item.name} />
                        <div className="carrito-item-details">
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price.toLocaleString('de-DE')}</p>
                            <div className="cantidad">
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))} 
                                />
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button className="eliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carrito-total">
                <h3>Total: ${getCartTotal().toLocaleString('de-DE')}</h3>
                <button className="comprar" onClick={handleProceedToCheckout}>
                    <span>Proceder a la Compra</span>
                </button>
            </div>

            <ConfirmationModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onConfirm={handleConfirmPurchase} 
            />

            {isPurchaseConfirmed && <p>Compra realizada</p>}
        </div>
    );
};

export default Cart;
