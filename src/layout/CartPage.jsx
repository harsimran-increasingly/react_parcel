import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import useStore from '../../store/store';
import './CartPage.scss'
import Product from '../components/Product/Product';
function CartPage() {
    const fetchBundles = useStore((store) => store.fetchBundle);
    const bundles = useStore((store) => store.bundles);
    useEffect(() => {
        fetchBundles("TEST");
    }, [bundles]);

    if (!bundles.ProductsDetail) {
        return;
    }
    return (
        <div className='inc_pdp_recs_block'>
            <div className="inc_pdp_rect_title">Customers Also Bought</div>
            <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={4}
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
    )
}

export default CartPage