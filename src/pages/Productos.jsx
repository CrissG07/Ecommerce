import ProductList from "../components/ProductList";
import myProductList from "../productos";




export const Productos = () => {
    return (
        <ProductList products={myProductList} />
    );
};

export default Productos;