import React from 'react'
import './Product.scss'
function Product(props) {
    const { ProductName, ImageURL, Price } = props
    return (
        <div className='inc_product_block'>
            <div className="inc_product_image">
                <img className="inc_product_image_element" src={ImageURL} />
            </div>
            <div className="inc_product_description">
                <div className="inc_product_description_name">{ProductName}</div>
                <div className="inc_product_description_price">{Price}</div>
            </div>

        </div>
    )
}

export default Product