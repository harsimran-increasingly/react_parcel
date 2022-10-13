import React, { useEffect, useState } from 'react'
import { formatter } from '../../../lib/helpers'
import useStore from '../../../store/store'
import './Product.scss'
function Product(props) {
    const { ProductName, ImageURL, Price,ProductId } = props
    const addToStore = useStore((state) => state.addToStore)
    const removeFromStore = useStore((store) => store.removeFromStore)
    const addedProductIds = useStore((store) => store.addedProductIds)
    const [isPresent, setIsPresent] = useState(false)

    const performAction = () => {
        if (isPresent) {
            removeFromStore(ProductId)
        } else {
            addToStore(props)
        }
    }
    useEffect(() => {
        let check = addedProductIds.find((item) => item === ProductId)
        setIsPresent(check)
    }, [addedProductIds])
    return (
        <div className='inc_product_block'>
            <div className="inc_product_image">
                <img className="inc_product_image_element" src={ImageURL} />
            </div>
            <div className="inc_product_description">
                <div className="inc_product_description_name">{ProductName}</div>
                <div className="inc_product_description_price">{formatter.format(Price)}</div>
                <div className={ isPresent ? " inc_product_description_button inc_product_description_button_added" : 
            "inc_product_description_button"}  onClick={() => performAction()}>{isPresent ? "Added" : "Add To Cart"}</div>
            </div>

        </div>
    )
}

export default Product