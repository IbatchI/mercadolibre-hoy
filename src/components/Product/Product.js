import React from 'react'
import ListOfPictures from 'components/ListOfPictures/ListOFPictures'
import { Link } from 'wouter'
import './Product.css'

function Product({
  permalink,
  title,
  price,
  pictures,
  desciption,
}) {
  return (
    <Link className="product" to={permalink}>
      <h3 className="overflow-product-title">{title}</h3>
      <ListOfPictures pictures={pictures} />
      <span>${price}</span>
    </Link>
  )
}

export default React.memo(Product)
