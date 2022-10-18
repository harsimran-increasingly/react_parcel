import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { formatter } from '../../../lib/helpers'
import useStore from '../../../store/store'
import './Product.scss'
import Modal from '../Modal/Modal';

function ActionButton({ isPresent, performAction, ProductType }) {
    if (ProductType === "simple") {
        return (<button type='button' className={isPresent ? " inc_product_description_button inc_product_description_button_added" :
            "inc_product_description_button"} onClick={() => performAction()}>{isPresent ? "Added" : "Add To Cart"}</button>)
    }
    return <Modal />
}
function Product(props) {

    const { ProductName, ImageURL, Price, ProductId, ProductType } = props
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
                <img className="inc_product_image_element" src={ImageURL} alt={ProductName} />
            </div>
            <div className="inc_product_description">
                <div className="inc_product_description_name">{ProductName}</div>
                <div className="inc_product_description_price">{formatter.format(Price)}</div>
                <ActionButton ProductType={ProductType} isPresent={isPresent} performAction={performAction} />
            </div>
        </div>
    )
}

Product.propTypes = {
    ProductName: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    ProductType: PropTypes.string.isRequired,
    ProductId: PropTypes.string.isRequired,

}

ActionButton.propTypes = {
    isPresent: PropTypes.bool.isRequired,
    performAction: PropTypes.func.isRequired,
    ProductType: PropTypes.string.isRequired
}
export default Product