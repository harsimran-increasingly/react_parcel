/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import CartPage from './layout/CartPage';
import ProductPage from './layout/ProductPage';
import './App.scss';

function App({ pageType }) {
  if (pageType === 'PDP') {
    return <ProductPage />;
  }
  if (pageType === 'CART') {
    return <CartPage />;
  }
}

App.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default App;
