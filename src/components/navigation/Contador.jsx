import React, { useState } from 'react';


const Contador = (props) => {
    console.log(props.stock, props.initial); /* Valor máximo del contador */

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

    const onAdd = () => {
        if (props.stock > 0) {
            alert(`Agregaste ${clicks} unidades al carrito.`)
        }
        else {
            alert(`No hay suficiente stock de este producto.`)
        }
    }

    return (

        <div>
            <h3>Item Counter</h3>
            <button onClick={handleDecrement}>restar</button>
            <h3>Clicks: {clicks}</h3>
            <button onClick={handleIncrement}>sumar</button>
            <hr />
            <button onClick={onAdd}>Finalizar Compra</button>
        </div>
    )
}

    export default Contador
    //     const [clicks, setClicks] = useState(1);

    //     function handleClicks() {
    //         setClicks(clicks+1);
    //     }


    //   return (
    //     <>
    //         <button className='btn btn-light' onClick={handleClicks}>boton que quiero mostrar</button>
    //         <h3>Clicks: {clicks}</h3>
    //     </>
    //   )



