import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Card = ( {name, description, imgUrl, price, id} ) => {

    return (

        <div className='col-4'>
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt="espinillo" width='10vw' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>${price}</h6>
                    <p className="card-text">{description}</p>
                    <button><Link to={`/detalle/${id}`} >Ver mas</Link></button>
                </div>
            </div>
        </div>

    )
}

export default Card