import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

const Contador = (props) => {

    const [clicks, setClicks] = useState(props.initial); /* hook de estado */

    const handleIncrement = () => {
        if (clicks < props.stock) {
            setClicks(clicks + 1);
        }
    };

    const handleDecrement = () => {
        if (clicks > props.initial) {
            setClicks(clicks - 1);
        }
    };

    return (

        <div>
            <div className='btn-group'>
                <Button onTouch={handleDecrement} btnClass="btn btn-primary" text="Restar" />
                <h3 className="text-center">{clicks}</h3>
                <Button onTouch={handleIncrement} btnClass="btn btn-primary" text="Sumar" />
                
            </div>
            <hr />
            <Button onTouch={() => props.onAdd(clicks)} btnClass="btn btn-success" text="Finalizar Compra" />
            <Link className="nav-link" to="/Cart">
            </Link>
        </div>
    )
}

export default Contador