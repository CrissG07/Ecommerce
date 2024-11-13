import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductDetail from '../components/ProductDetail'; // Asegúrate de que la ruta es correcta
import myProductList from '../productos'; // Asegúrate de que la ruta es correcta

const DetallesProducto = () => {
    const { id: productId } = useParams(); // Obtiene el ID del producto desde la URL
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {

        const parsedId = parseInt(productId);
        

        const foundProduct = myProductList.find(p => p.id === parsedId);
        

        if (foundProduct) {
            setProduct(foundProduct);

            // Encuentra productos relacionados
            const related = myProductList.filter(p => p.categoria === foundProduct.categoria && p.id !== foundProduct.id);
            setRelatedProducts(related);
        } else {
            console.error("Producto no encontrado con ID:", parsedId);
        }
    }, [productId]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div>
            <ProductDetail 
                product={product} 
                relatedProducts={relatedProducts} 
            />
            
        </div>
    );
};

export default DetallesProducto;
