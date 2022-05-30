import { Link } from 'wouter'
import './Product.css'

const Product = ({ id, permalink, title, price, thumbnail }) => {
  return (
    <Link
      className='product'
      to={permalink}
    >
      <h4>{title}</h4>
      <span>{price}</span>
      {/* <img url={thumbnail} alt={title} /> */}
    </Link>
  )
}

export default Product
