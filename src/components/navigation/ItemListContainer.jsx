import React from 'react';
import Card from './Card';
import Greeting from './Greeting';

const ItemListContainer = () => {

    const dataProduct = {
        name: 'Espinillo',
        duration: 'Media',
        valorCalorico: 'Alto',
        price: 850,
        description: 'Lenia que dura mas y genera mas calor.',
        imgUrl: '/images/card-espinillo.jpg'
    }
    const dataProduct2 = {
        name: 'Quebracho',
        duration: 'Media/Alta',
        valorCalorico: 'Alto',
        price: 950,
        description: 'Lenia que dura mas y genera mas calor.',
        imgUrl: '/images/card-quebracho.jpg'
    }
    const greeting = "Esta semana en promocion:"

    return (
        <div className='container-lg border border-4 border-rounded mx-2 p-3 '>
            <Greeting data={greeting} />
            <div className="row">
                <Card data={dataProduct} />
                <Card data={dataProduct2} />
            </div>
        </div>
    )
}

export default ItemListContainer