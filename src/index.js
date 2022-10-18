import React from 'react';
import ReactDOM from 'react-dom';
import { insertAfter } from '../lib/helpers';
import App from './App';
import './index.css';

function cleanup() {
  // Remove Any INC BLOCK
  const incBlock = document.querySelector('.inc_pdp_block');
  if (incBlock) {
    incBlock.remove();
  }
  const mountNode =
    document.querySelector('.product-view') ||
    document.querySelector('.main') ||
    document.querySelector('.p-6') ||
    document.querySelector('.pdp-top');

  const INC_PDP_BLOCK = document.createElement('div');
  INC_PDP_BLOCK.classList.add('inc_pdp_react');
  insertAfter(INC_PDP_BLOCK, mountNode);
  return INC_PDP_BLOCK;
}

const rootNode = cleanup();
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App pageType="PDP" />, rootNode);

let previousUrl = window.location.href;
const observer = new MutationObserver(() => {
  if (window.location.href !== previousUrl) {
    previousUrl = window.location.href;

    const updatedRootNode = cleanup();
    if (window.location.href.indexOf('/cart') > 1) {
      ReactDOM.render(<App pageType="CART" />, updatedRootNode);
    } else if (window.location.href.indexOf('/') > 1) {
      ReactDOM.render(<App pageType="PDP" />, updatedRootNode);
    }
  }
});

const config = { subtree: true, childList: true };
observer.observe(document, config);
