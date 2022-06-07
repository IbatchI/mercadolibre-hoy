import Product from 'components/Product/Product'
import './ListOfProducts.css'

export default function ListOfProducts({ products, page }) {
  const firstItem = (page - 1) * 12
  const lastItem = (page - 1) * 12 + 12
  return (
    <div className="ListOfProducts">
      {products.slice(firstItem, lastItem).map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
