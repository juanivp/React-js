import React from "react";
import { useCartContext } from "../../../context/CartContext";
import './itemCart.css';


function ItemCart({product}) {
    const {removeProduct,  clearCart} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.imgUrl} alt={product.title} />
        <div>
            <p>Producto: {product.name} </p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart