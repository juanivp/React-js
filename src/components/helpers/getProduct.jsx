import React from 'react'
import arrayProducts from '../../data/data';

function getProductos() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(arrayProducts) }, 0);
    })
}

export default getProductos