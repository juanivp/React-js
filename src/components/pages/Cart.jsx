import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../navigation/ItemCart/ItemCart';
import UserForm from '../UserForm/UserForm';

function Cart() {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return(
    <>
      <p>No hay elementos en el carrito.</p>
      <Link to='/'><button>Llena tu carrito!</button></Link>
    </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>Total: ${totalPrice()}</p>
      <button onClick={clearCart}>Borrar seleccion</button>
      <UserForm cart={cart}/>
    </>
  );
}

export default Cart