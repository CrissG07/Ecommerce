
/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext';
import '../styles/productCart.css';
import 'boxicons/css/boxicons.min.css';

// Importa useNavigate en lugar de useHistory
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate(); // Usa useNavigate para la navegación
  const { addToCart } = useCart(); // Hook personalizado para manejar el carrito

  const handleInfoClick = () => {
    navigate(`/products/${product.id}`); // Navega a la página de detalles del producto
  };

  return (
    <div className={`product-card ${product.isPopular ? 'popular-product' : ''}`}>
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-info">
        <h3 className="text-title">{product.name}</h3>
      </div>
      <div className="card-footer">
        <span className="text-title">${product.price.toLocaleString('de-DE')}</span>
        <div onClick={handleInfoClick} style={{ cursor: 'pointer' }}>
          <i className='bx bx-info-circle'></i>
        </div>
        <div className="card-button" onClick={() => addToCart(product)}>
          <i className='bx bx-cart'></i>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
