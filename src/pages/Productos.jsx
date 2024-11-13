import ProductList from "../components/ProductList";
import myProductList from "../productos";
import { useEffect } from 'react';




export const Productos = () => {
    useEffect(() => {
        document.title = 'Ecommerce - Productos';
      }, []);
    return (
        <ProductList products={myProductList} />
    );
};

export default Productos;