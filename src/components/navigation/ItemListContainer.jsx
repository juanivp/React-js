import React, { useEffect, useState } from 'react';
import { getProductos, getProductosByCategory } from '../helpers/getProduct';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Spinner from './Spinner/Spinner';


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
            }
        }, [statusFromParams]);

    return (
        data.length === 0 ?
            <Spinner />
            :
            <div className='container-lg border border-4 border-rounded mx-2 p-3 '>
                <div className="row">
                    <ItemList data={data} />
                </div>
            </div>
    )
}

export default ItemListContainer