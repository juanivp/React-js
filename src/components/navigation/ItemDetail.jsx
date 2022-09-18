import React, { useContext, useState } from 'react'
import Contador from './Contador'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

function ItemDetail({ data }) {
  const { addProduct } = useCartContext();
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState(false);

  function handleAdd(quantity) {
    addProduct(data, quantity);
    setQuantityInCart(quantity);
    setFeedbackMsg(`${quantity} unidades de ${data.name} agregadas al carrito.`)
  }

  return (
    <div className='col-4'>
      <div className="card">
        <img src={data.imgUrl} className="card-img-top" alt={data.name} width='10vw' />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6>${data.price}</h6>
          <p className="card-text">{data.description}</p>

          <small>{feedbackMsg && <p>{feedbackMsg}</p>}</small>


          {quantityInCart === 0 ? (
            <Contador
            initial={1}
            stock={data.stock}
            onAdd={handleAdd}
          />
          ) : (<>
            <Link to="/cart">Ir al carrito</Link>
            <br />
            <Link to="/">Seguir comprando</Link>
            </>)
          }
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

