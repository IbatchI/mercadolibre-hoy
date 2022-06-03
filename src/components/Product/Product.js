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
      <ListOfPictures pictures={pictures} />
      <h4>{title}</h4>
      <span>$ {price}</span>
    </Link>
  )
}

export default React.memo(Product)
