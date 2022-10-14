import React, { useEffect, useState } from 'react'
import { formatter } from '../../../lib/helpers'
import useStore from '../../../store/store'
import './Cart.scss'

function Cart() {
  const cart = useStore((store) => store.cart)
  const removeFromStore = useStore((store) => store.removeFromStore)
  const total = useStore((store) => store.total)

  return (
    <div className="inc_pdp_bundle_cart">
   
      <div className="inc_pdp_bundle_cart_block">
        <div className="inc_pdp_bundle_cart_added_products">
          {cart && cart.map((product) => {
            return (<div className='inc_pdp_bundle_cart_product'>
              <img className="inc_pdp_bundle_cart_product_image" src={product.ImageURL} />
              <div className="inc_pdp_bundle_cart_product_description">
                <p className="inc_pdp_bundle_cart_product_description_title">{product.ProductName}</p>
                <p className="inc_pdp_bundle_cart_product_description_price">{formatter.format(product.Price)}</p>
              </div>
              <button className='inc_pdp_bundle_cart_product_remove' onClick={() => removeFromStore(product.ProductId)}>X</button>
            </div>)
          })}
        </div>
        <div className='inc_pdp_bundle_cart_footer'>
          <div className="inc_pdp_bundle_cart_total">
            <div className="inc_pdp_bundle_cart_total_title">Total Kit Price</div>
            <p className="inc_pdp_bundle_cart_total_price">{formatter.format(total)}</p>
          </div>
          <button className="inc_pdp_bundle_cart_button">Add To Bundle</button>
        </div>
      </div>
    </div>
  )
}

export default Cart