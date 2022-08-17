import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import getProductos from '../helpers/getProduct';
import arrayProducts from '../../data/data';


function ItemDetailContainer() {
    const [data, setData] = useState([]);
    const idUrl = useParams().id;
    console.log(idUrl);

    function getProducto() {
        return new Promise((resolve => {
            let findItem = arrayProducts.find((element) => element.id === Number(idUrl))
            setTimeout(() => {
                resolve(findItem)
            }, 0);
        }))
    }


    useEffect(() => {
        getProducto().then(product => {
            setData(product)
        })
    }, [])

console.log(data)

    return (
        <>
            <ItemDetail data={data} />
        </>
    )
    }

    export default ItemDetailContainer