import Cart from "../components/Cart";
import { useEffect } from 'react';


function Carrito() {
  useEffect(() => {
    document.title = 'Ecommerce - Carrito';
  }, []);
  return(
<Cart/>

  )
}

export default Carrito;
