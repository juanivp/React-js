import React from 'react'

function ItemDetail( {data} ) {
  return (
    <div className='col-4'>
            <div className="card">
                <img src={data.imgUrl} className="card-img-top" alt={data.name} width='10vw' />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h6>${data.price}</h6>
                    <p className="card-text">{data.description}</p>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail