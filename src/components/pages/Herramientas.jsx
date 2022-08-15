import React from 'react'
import arrayProducts from '../../data/data';
import { useState, useEffect } from 'react';
import Card from '../navigation/Card';

function getHerramienta() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(arrayProducts.filter(producto => producto.category == "herramienta")) }, 0);
  })
}

const Herramientas = () => {
  const [item, setItem] = useState([]);

  useEffect(
    () => {
      getHerramienta().then((respuesta) => {
        setItem(respuesta)
      }
      )
    }, []
  )
  console.log(item)

  return (
    <div className='container-lg border border-4 border-rounded mx-2 p-3 '>
      <div className="row">
          {item.map((cadaHerramienta) => {
          return (
                <Card
                  key={cadaHerramienta.id}
                  name={cadaHerramienta.name}
                  price={cadaHerramienta.price}
                  description={cadaHerramienta.description}
                  imgUrl={cadaHerramienta.imgUrl}
                  />
                  );
              })}
          </div>
      </div>
  )}

export default Herramientas