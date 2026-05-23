import { FaStar } from 'react-icons/fa'
import '../styles/productcard.css'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function ProductCard({ product }) {
  const { products, setProducts } =
  useContext(ProductContext)
  const handleDelete = (id) => {

  const updatedProducts =
    products.filter(
      (product) => product.id !== id
    )

  setProducts(updatedProducts)
}
  return (
    <div className='product-card'>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className='product-info'>

        <h3>{product.name}</h3>

        <p className='price'>
          ₹{product.price} / kg
        </p>

        <div className='rating-section'>

          <div className='stars'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className='inactive-star' />
          </div>

          <p className='rating-text'>
            4.0 Rating (120 Reviews)
          </p>
          <button
  className='delete-btn'
  onClick={() => handleDelete(product.id)}
>
  Delete Product
</button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard