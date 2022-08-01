import React, { Component } from 'react';


const Card = (props) => {

    return (
        <div className='col-4'>
            <div className="card">
                <img src={props.data.imgUrl} className="card-img-top" alt="espinillo" width='10vw' />
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <h6>${props.data.price}</h6>
                    <p className="card-text">{props.data.description}</p>
                </div>
            </div>
        </div>

    )
}

export default Card