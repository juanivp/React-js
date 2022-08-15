import React from 'react'

function ItemDetail( {name, description, imgUrl, price} ) {
  return (
    <div className='col-4'>
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt={name} width='10vw' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>${price}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail