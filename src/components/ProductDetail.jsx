/* eslint-disable react/prop-types */
import '../styles/productDetail.css';
import { useCart } from '../context/CartContext';


const ProductDetail = ({ product, relatedProducts = [] }) => {
    const { addToCart } = useCart();
    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-img" />
            <h2 className="title">{product.name}</h2>
            <p className="info">Descripción: {product.description}</p>
            <p className="price">Precio: ${product.price.toLocaleString()}</p>
            <button className='btn' onClick={() => addToCart(product)}>Añadir al carrito</button>
            {/* Sección de productos relacionados */}
            {relatedProducts.length > 0 && (
                <div className="related-products">
                    <h3 className='parrafo'>Productos relacionados</h3>
                    <div className="related-products-list">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="related-product-card">
                                <img src={relatedProduct.image} alt={relatedProduct.name} className="related-product-img" />
                                <p className="related-product-name">{relatedProduct.name}</p>
                                <p className="related-product-price">${relatedProduct.price.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
