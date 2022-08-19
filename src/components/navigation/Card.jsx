import React  from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card = ( {name, description, imgUrl, price, id} ) => {

    return (

        <div className='col-4'>
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt="espinillo" width='10vw' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>${price}</h6>
                    <p className="card-text">{description}</p>
                    <Link to={`/detalle/${id}`} >
                        <Button onTouch ={() => alert(`Clickeado: ${name}`)} text="Ver mas">Ver mas</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Card