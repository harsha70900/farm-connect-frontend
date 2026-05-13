import '../styles/products.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const allProducts = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    description: 'Organic tomatoes directly from local farmers.',
    price: 40,
    image:
      'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 2,
    name: 'Premium Rice',
    category: 'Grains',
    description: 'High quality rice from Karnataka farms.',
    price: 70,
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 3,
    name: 'Fresh Carrots',
    category: 'Vegetables',
    description: 'Naturally grown healthy carrots.',
    price: 50,
    image:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 4,
    name: 'Apples',
    category: 'Fruits',
    description: 'Fresh apples directly from farms.',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop',
  },
]

function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || product.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Navbar />

      <div className='products-page container'>

        <h1 className='products-title'>
          Explore Fresh Products
        </h1>

        <div className='products-controls'>

          <input
            type='text'
            placeholder='Search products...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className='filter-buttons'>

            <button onClick={() => setCategory('All')}>
              All
            </button>

            <button onClick={() => setCategory('Vegetables')}>
              Vegetables
            </button>

            <button onClick={() => setCategory('Fruits')}>
              Fruits
            </button>

            <button onClick={() => setCategory('Grains')}>
              Grains
            </button>

          </div>

        </div>

        <div className='products-grid'>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default Products