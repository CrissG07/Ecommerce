/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import myProductList from '../productos';
import { Link } from 'react-router-dom';
import '../styles/productDetail.css';

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        setSelectedProduct(product);
    };

    const getRelatedProducts = (product) => {
        return myProductList.filter(p => p.categoria === product.categoria && p.id !== product.id);
    };

    const handleCategoryClick = (category, event) => {
        event.preventDefault();
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter(product => {
        const category = product.categoria || '';
        const name = product.name || '';
        const matchesCategory = selectedCategory ? category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            {/* Solo mostrar las categorías en pantallas grandes */}
            <div className='section'>
                <ul className="categoria">
                    {['moda', 'electronicos', 'hogar', 'deportes', 'juguetes', 'belleza', 'herramientas', 'mascotas', 'comida', ''].map((category, index) => (
                        <li key={index} className='list'>
                            <Link className='link' to="#" onClick={(e) => handleCategoryClick(category, e)}>
                                {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Todas'}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <h1>Productos</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                product={product}
                                onClick={() => handleAddToCart(product)}
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría o con esta búsqueda.</p>
                )}
            </div>

            {selectedProduct && (
                <div>
                    <ProductDetail
                        product={selectedProduct}
                        relatedProducts={getRelatedProducts(selectedProduct)}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductList;
