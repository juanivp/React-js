import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../navigation/ItemCart/ItemCart';
import UserForm from '../UserForm/UserForm';
import Button from '../navigation/Button/Button';

function Cart() {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <h3 className='text-center'>No hay elementos en el carrito😣</h3>
        <Link to='/'>
          <Button btnClass="btn btn-success" text="Ir de compras" />
        </Link>
      </>
    )
  }

  return (
    <>
      <table class="table text-center" >
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(product => <ItemCart key={product.id} product={product} />)
          }

          <tr>
            <th scope='row'>TOTAL</th>
            <th></th>
            <th></th>
            <th>${totalPrice()}</th>
            <th><Button text="Borrar seleccion" btnClass="btn btn-danger" onTouch={clearCart} /></th>
          </tr>

        </tbody>
      </table>
      <UserForm cart={cart} />
    </>
  );
}

export default Cart