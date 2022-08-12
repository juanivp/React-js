import React from 'react';

let catalogo = [
    {
        id: "1",
        name: "Producto 1",
        precio: 600,
        description: "El mejor producto por favor compralo",
        stock: 25
    },

    {
        id: "2",
        name: "Producto 2",
        precio: 900,
        description: "El mejor producto por favor compralo",
        stock: 25
    },

    {
        id: "3",
        name: "Producto 3",
        precio: 1200,
        description: "El mejor producto por favor compralo",
        stock: 25
    }];
    
export const Item = () => {
    return new Promise((resolve) => {
        
        setTimeout(() => resolve(catalogo), 3000);
    },
        promesa().then(
            () => console.log(respuesta)
        ).catch(
            () => console.log("Error en traer los productos")
        ).finally(
            () => console.log("Promise end")
        )
    )
}