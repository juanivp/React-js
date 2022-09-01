import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';
import { getProductos, getProductosByCategory } from '../helpers/getProduct';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const statusFromParams = useParams().idCategory

    useEffect(
        () => {
            if (statusFromParams === undefined) {
                getProductos().then((response) => {
                    setData(response);
                });
            }
            else {
                getProductosByCategory(statusFromParams).then((response) =>
                    setData(response));
            }}, []);

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