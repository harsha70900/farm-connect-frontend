import Navbar from '../components/Navbar'
import '../styles/productdetails.css'

function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className='product-details-page'>

        <div className='product-details-container container'>

          <div className='product-image-section'>

            <img
              src='https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop'
              alt='product'
            />

          </div>

          <div className='product-info-section'>

            <span className='details-category'>
              Vegetables
            </span>

            <h1>Fresh Tomatoes</h1>

            <p className='details-price'>
              ₹40 / kg
            </p>

            <p className='details-description'>
              Fresh organic tomatoes directly sourced from local farmers.
              Rich in nutrients and grown using natural farming methods.
            </p>

            <div className='details-extra'>

              <p>
                <strong>Seller:</strong> Harsha Farms
              </p>

              <p>
                <strong>Quantity:</strong> 100 kg Available
              </p>

              <p>
                <strong>Location:</strong> Bangalore
              </p>

            </div>

            <button className='buy-btn'>
              Contact Seller
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetails