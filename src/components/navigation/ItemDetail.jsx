import React, {useContext} from 'react'
import Contador from './Contador'
import { useCartContext } from '../../context/CartContext' 

function ItemDetail({ data }) {
  const {addProduct} = useCartContext();


  function handleAdd(clicks) {
    console.log("Agregaste unidades al carrito.", clicks)
    const cantidadClicks = clicks
    addProduct(data, clicks);
  }

  return (
    <div className='col-4'>
      <div className="card">
        <img src={data.imgUrl} className="card-img-top" alt={data.name} width='10vw' />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6>${data.price}</h6>
          <p className="card-text">{data.description}</p>
          <Contador
            initial={1}
            stock={data.stock}
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail