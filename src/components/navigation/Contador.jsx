import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <button onClick={handleDecrement}>restar</button>
            <h3>Clicks: {clicks}</h3>
            <button onClick={handleIncrement}>sumar</button>
            <hr />
            
            <button onClick={() => props.onAdd(clicks)}>Finalizar Compra</button>
            <Link className="nav-link" to="/Cart">
            </Link>
        </div>
    )
}

export default Contador