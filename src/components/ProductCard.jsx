import '../styles/productcard.css'

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

          <button>
            View Details
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard