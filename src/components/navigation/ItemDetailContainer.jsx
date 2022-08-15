import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import getProductos from '../helpers/getProduct';


function ItemDetailContainer(props) {
    // const { idUrl } = useParams();
    // console.log(idUrl);

    const [item, setItem] = useState([]);

    useEffect(
        () => {
            getProductos( { idUrl } = useParams() ).then((respuesta) => {
                setItem(respuesta)
            }
            )
        }, []
    )

    console.log(item)

    return (
        <>
            <ItemDetail item={setItem} />
        </>
    )
}

export default ItemDetailContainer