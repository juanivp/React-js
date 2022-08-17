import Card from "./Card";
import React from 'react'

function ItemList({data}) {
    return(
    data.map((cadaProducto) => {
        return (
            <Card
                key={cadaProducto.id}
                name={cadaProducto.name}
                price={cadaProducto.price}
                description={cadaProducto.description}
                imgUrl={cadaProducto.imgUrl}
                id={cadaProducto.id}
            />
        )
    })
    )
}
export default ItemList