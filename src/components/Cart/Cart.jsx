import React, { useEffect, useState } from 'react'
import useStore from '../../../store/store'
import './Cart.scss'

function Cart() {
    const cart = useStore((store) => store.cart)
   
  return (
    <div className="inc_pdp_bundle_cart">
    <div className="inc_pdp_bundle_cart_title">Added Items</div>
    <div className="inc_pdp_bundle_cart_added_products">
        {cart && cart.map((product) => {
            return (<div>{product.ProductName}</div>)
        })}
    </div>
    <button className="inc_pdp_bundle_cart_button">Add To Bundle</button>
  </div>
  )
}

export default Cart