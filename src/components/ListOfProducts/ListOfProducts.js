import Product from 'components/Product/Product'
import './ListOfProducts.css'

const ListOfProducts = ({ products }) => {
  return (
    <div className="ListOfProducts">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ListOfProducts
