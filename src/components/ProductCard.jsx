import '../styles/productcard.css'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className='product-card'>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className='product-info'>

        <span className='product-category'>
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className='product-bottom'>

          <span className='price'>
            ₹{product.price}
          </span>

          <Link to='/product-details'>
  <button>
    View Details
  </button>
</Link>

        </div>

      </div>

    </div>
  )
}

export default ProductCard