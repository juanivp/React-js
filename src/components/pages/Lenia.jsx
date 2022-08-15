import React from 'react'
import arrayProducts from '../../data/data';
import { useState, useEffect } from 'react';
import Card from '../navigation/Card';

function getLenia() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(arrayProducts.filter(producto => producto.category == "lenia")) }, 0);
  })
}

const Lenia = () => {
  const [item, setItem] = useState([]);

  useEffect(
    () => {
      getLenia().then((respuesta) => {
        setItem(respuesta)
      }
      )
    }, []
  )
  console.log(item)

  return (
    <div className='container-lg border border-4 border-rounded mx-2 p-3 '>
      <div className="row">
          {item.map((cadaLenia) => {
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
  )}

export default Lenia