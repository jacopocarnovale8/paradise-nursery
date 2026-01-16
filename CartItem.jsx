import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  // Calculate total cost for a single item
  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  // Calculate total cart amount
  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  // Handle increase quantity
  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  // Handle decrease quantity
  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  // Handle remove item
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    navigate('/products');
  };

  // Handle checkout
  const handleCheckout = () => {
    setShowCheckoutMessage(true);
    setTimeout(() => {
      setShowCheckoutMessage(false);
    }, 3000);
  };

  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started!</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container">
        <header className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </header>

        {showCheckoutMessage && (
          <div className="checkout-message">
            <p>🎉 Coming Soon! Checkout feature will be available shortly.</p>
          </div>
        )}

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                  <p className="cart-item-total">
                    Total: ${calculateItemTotal(item.price, item.quantity)}
                  </p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn decrease"
                      onClick={() => handleDecrease(item.id)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn increase"
                      onClick={() => handleIncrease(item.id)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                    aria-label="Remove item"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${calculateCartTotal()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span className="free-shipping">FREE</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span className="total-amount">${calculateCartTotal()}</span>
                </div>
              </div>

              <div className="summary-actions">
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
                <button 
                  className="continue-shopping-btn"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
