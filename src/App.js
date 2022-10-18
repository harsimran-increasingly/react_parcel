import React, { useEffect, useState } from "react";
import "./App.scss";
import CartPage from "./layout/CartPage";
import ProductPage from "./layout/ProductPage";

function App({pageType}) {
  

    if (pageType == "PDP") {
        return <ProductPage />;
    }
    if (pageType == "CART") {
        return <CartPage />;
    }

    return <Box></Box>;
}

export default App;
