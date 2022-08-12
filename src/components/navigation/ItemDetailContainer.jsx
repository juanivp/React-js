import React, { useEffect, useState } from 'react';
import arrayProducts from '../../data/data'
import ItemDetail from './ItemDetail';

function getProducto() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(arrayProducts.find(producto => producto.id = {item})) }, 0);
    })
}

    function ItemDetailContainer() {
        const [item, setItem] = useState([]);

        useEffect(
            () => {
                getProducto().then((respuesta) => {
                    setItem(respuesta)
                }
                )
            }, []
        )
        

        return (
            <>
            <ItemDetail item={2} />
            </>
        )
    }

export default ItemDetailContainer