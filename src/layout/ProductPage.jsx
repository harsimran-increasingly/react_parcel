import React, { useEffect } from 'react'
import useStore from '../../store/store';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import Product from '../components/Product/Product';
import Cart from '../components/Cart/Cart';
import './ProductPage.scss'

function ProductPage() {
    const fetchBundles = useStore((store) => store.fetchBundle);
    const bundles = useStore((store) => store.bundles);
    useEffect(() => {
        fetchBundles("TEST");
    }, [bundles]);

    if (!bundles.ProductsDetail) {
        return;
    }
    return (
        <div> <div className="inc_pdp_block">
            <h2 className="inc_pdp_title">Frequently Bought Together</h2>
            <div className="inc_pdp_product_list_block">
                <div className="inc_pdp_main_product_block">
                    <Product {...bundles.ProductsDetail[0]} />
                </div>
                <div className="inc_pdp_product_plus_sign">+</div>
                <div className="inc_pdp_slider">
                    <Swiper
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={2}
                    >
                        {bundles.ProductsDetail &&
                            bundles.ProductsDetail.slice(1).map(
                                (product, idx) => {
                                    return (
                                        <SwiperSlide>
                                            <Product {...product} />
                                        </SwiperSlide>
                                    );
                                }
                            )}
                    </Swiper>
                </div>
                <Cart />
            </div>
        </div></div>
    )
}

export default ProductPage