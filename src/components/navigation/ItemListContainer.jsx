import React, { useEffect, useState } from 'react';
import Card from './Card';
import Greeting from './Greeting';
import arrayProducts from '../../data/data'


function getProductos() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(arrayProducts) }, 0);
    })
}


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
                {data.map((cadaLenia) => {
                    return (
                        <Card
                            key={cadaLenia.id}
                            name={cadaLenia.name}
                            price={cadaLenia.price}
                            description={cadaLenia.description}
                            imgUrl={cadaLenia.imgUrl}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ItemListContainer