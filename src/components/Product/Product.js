import { Link } from 'wouter'
import './Product.css'

export default function Product({ id, permalink, title, price, thumbnail }) {
  return (
    <Link className="product" to={permalink}>
      <h4>{title}</h4>
      <span>$ {price}</span>
    </Link>
  )
}
