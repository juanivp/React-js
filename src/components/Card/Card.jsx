import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../navigation/Button/Button';
import './card.css';

const Card = ({ name, description, imgUrl, price, id }) => {

    return (
        <div className='col-md-3 col-sm-4 p-2'>
            <img src={imgUrl} className="img-fluid pb-2" alt="espinillo" width='10vw' />
            <div className="card">
                
                <div className="card-body">
                    <h5 className="card-title" id="card-title">{name}</h5>
                    <h6>${price}</h6>
                    <p className="card-text" id='card-text'>{description}</p>
                    <Link to={`/detalle/${id}`} >
                        <Button btnClass="btn btn-dark" text="Ver mas">Ver mas</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Card
