import React, { useEffect, useState } from 'react';
import Card from './Card';
import Greeting from './Greeting';
import arrayProducts from '../../data/data'
import getProductos from '../helpers/getProduct';

getProductos();

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            getProductos().then((respuesta) => {
                setData(respuesta)
            }
            )
        }, []
    )
    console.log(arrayProducts)

    const greeting = "Esta semana en promocion:"

    return (
        <div className='container-lg border border-4 border-rounded mx-2 p-3 '>
            <Greeting data={greeting} />
            <div className="row">
                {data.map((cadaProducto) => {
                    return (
                        <Card
                            key={cadaProducto.id}
                            name={cadaProducto.name}
                            price={cadaProducto.price}
                            description={cadaProducto.description}
                            imgUrl={cadaProducto.imgUrl}
                            id={cadaProducto.id}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ItemListContainer