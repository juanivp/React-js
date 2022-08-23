import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    <>
      <p>No hay elementos en el carrito.</p>
      <Link to='/'><button>Llena tu carrito!</button></Link>
    </>
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
    </div>
  )
}

export default Cart