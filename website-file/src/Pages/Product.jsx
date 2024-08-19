import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

export const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div></div>
  )
}
