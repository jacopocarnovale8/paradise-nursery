import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

// Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="tagline">Bring Nature Home - Your One-Stop Shop for Beautiful Indoor Plants</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

// Navigation Bar Component
function NavigationBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">🌿 Paradise Nursery</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <Link to="/cart" className="cart-icon-wrapper">
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Main App Component
function AppContent() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={
            <>
              <NavigationBar />
              <ProductList />
            </>
          } />
          <Route path="/cart" element={
            <>
              <NavigationBar />
              <CartItem />
            </>
          } />
          <Route path="/about" element={
            <>
              <NavigationBar />
              <AboutUs />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
