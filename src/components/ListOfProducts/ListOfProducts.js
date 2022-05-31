import Product from 'components/Product/Product'
import './ListOfProducts.css'

export default function ListOfProducts({ products }) {
  return (
    <div className="ListOfProducts">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
