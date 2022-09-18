import React from "react";
import { useCartContext } from "../../../context/CartContext";
import Button from "../Button/Button";

function ItemCart({product}) {
    const {removeProduct} = useCartContext();
  return (
    <tr>
      <th>{product.name}</th>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td>${product.quantity * product.price}</td>
      <td><Button btnClass="btn btn-danger" onTouch={() => removeProduct(product.id)}>x</Button></td>
    </tr>
  )
}

export default ItemCart

