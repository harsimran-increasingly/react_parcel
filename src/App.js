import React, { useEffect } from "react";
import useStore from "../store/store";
import "./App.scss";
import Product from "./components/Product/Product";


function App() {
    const fetchBundles = useStore((store) => store.fetchBundle);
    const bundles = useStore((store) => store.bundles);

    useEffect(() => {
        fetchBundles("TEST");
    }, [bundles]);

    return (
        <div className="inc_pdp_block">
            <h2 className="inc_pdp_title">Frequently Bought Together</h2>
            <div className="inc_pdp_slider">
                {bundles.ProductsDetail &&
                    bundles.ProductsDetail.map((product) => {
                        return <Product {...product} />;
                    })}
            </div>
        </div>
    );
}

export default App;
