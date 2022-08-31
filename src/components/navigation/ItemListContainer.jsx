import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';
import arrayProducts from '../../data/data'
import getProductos from '../helpers/getProduct';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory

    useEffect(
        () => {
            getProductos().then(products => {
                let itemsFilter = arrayProducts.filter((element) => element.category === idCategory)
                if (idCategory === undefined) {
                    setData(products)
                }
                else {
                    setData(itemsFilter)
                }
            })

        }, [idCategory])


    const greeting = "Esta semana en promocion:"

    return (
        <div className='container-lg border border-4 border-rounded mx-2 p-3 '>
            <Greeting data={greeting} />
            <div className="row">
                <ItemList data={data} />
            </div>
        </div>
    )
    }

    export default ItemListContainer