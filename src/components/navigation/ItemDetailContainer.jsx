import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../helpers/getProduct';

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const idFromParams = useParams().id

    useEffect(
        () => {
            getProductoById(idFromParams).then(product => {
                setData(product)
            })
        }, [idFromParams]);

return (
    <>
        <ItemDetail data={data} />
    </>
)
    }

export default ItemDetailContainer