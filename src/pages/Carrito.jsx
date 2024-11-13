import Cart from "../components/Cart";


function Carrito() {
  useEffect(() => {
    document.title = 'Ecommerce - Carrito';
  }, []);
  return(
<Cart/>

  )
}

export default Carrito;
