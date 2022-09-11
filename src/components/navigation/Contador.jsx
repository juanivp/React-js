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
            <h3>Item Counter</h3>
            <Button onTouch={handleDecrement} type='alert'>restar</Button>
            <h3>Clicks: {clicks}</h3>
            <Button onTouch={handleIncrement}>sumar</Button>
            <hr />
            
            <Button onTouch={() => props.onAdd(clicks)}>Finalizar Compra</Button>
            <Link className="nav-link" to="/Cart">
            </Link>
        </div>
    )
}

export default Contador