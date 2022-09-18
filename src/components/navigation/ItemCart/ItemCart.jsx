import React from "react";
import { useCartContext } from "../../../context/CartContext";
import './itemCart.css';
import Button from "../Button/Button";


function ItemCart({product}) {
    const {removeProduct} = useCartContext();
  return (
    <tr>
      <th scope="row"><img src="{product.imgUrl}"></img></th>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td>${product.quantity * product.price}</td>
      <td><Button btnClass="btn btn-danger" onClick={() => removeProduct(product.id)}>x</Button></td>
    </tr>
  )
}

export default ItemCart

