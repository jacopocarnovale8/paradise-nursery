import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import './ProductList.css';

// Plant products data organized by categories
const plantsData = {
  "Air Purifying Plants": [
    {
      id: 1,
      name: "Snake Plant",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1593482892540-73c9b7589559?w=400",
      description: "Low maintenance, perfect for beginners"
    },
    {
      id: 2,
      name: "Spider Plant",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400",
      description: "Great air purifier with cascading leaves"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400",
      description: "Beautiful white flowers and air cleaning properties"
    }
  ],
  "Low Maintenance Plants": [
    {
      id: 4,
      name: "Pothos",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
      description: "Thrives in various light conditions"
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400",
      description: "Extremely drought tolerant and hardy"
    },
    {
      id: 6,
      name: "Aloe Vera",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400",
      description: "Medicinal properties and easy care"
    }
  ],
  "Flowering Plants": [
    {
      id: 7,
      name: "Orchid",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1590149039683-15268b4ecc4b?w=400",
      description: "Elegant and long-lasting blooms"
    },
    {
      id: 8,
      name: "African Violet",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400",
      description: "Compact with vibrant purple flowers"
    },
    {
      id: 9,
      name: "Anthurium",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=400",
      description: "Heart-shaped red flowers year-round"
    }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if item is already in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list-container">
      <div className="container">
        <header className="product-list-header">
          <h1>Our Plant Collection</h1>
          <p>Discover our curated selection of beautiful indoor plants</p>
        </header>

        {Object.entries(plantsData).map(([category, plants]) => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {plants.map((plant) => (
                <div key={plant.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${plant.price.toFixed(2)}</span>
                      <button
                        className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
