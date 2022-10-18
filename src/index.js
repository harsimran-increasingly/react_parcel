import React, { useState } from "react";
import ReactDOM from "react-dom";
import { insertAfter } from "../lib/helpers";
import App from "./App";
import "./index.css";

function cleanup() {
    // Remove Any INC BLOCK
    let incBlock = document.querySelector(".inc_pdp_block");
    if (incBlock) {
        incBlock.remove();
    }
    var mountNode =
        document.querySelector(".product-view") ||
        document.querySelector(".main") ||
        document.querySelector(".p-6") || 
        document.querySelector(".pdp-top")
    let INC_PDP_BLOCK = document.createElement('div');
    INC_PDP_BLOCK.classList.add("inc_pdp_react")
    insertAfter(INC_PDP_BLOCK, mountNode);
    return INC_PDP_BLOCK;
}

let rootNode = cleanup();
ReactDOM.render(<App pageType="PDP" />, rootNode);

var previousUrl = "";
var observer = new MutationObserver(function (mutations) {
    if (location.href !== previousUrl) {
        previousUrl = location.href;

        let rootNode = cleanup();
        if (window.location.href.indexOf('/cart') > 1) {
            ReactDOM.render(<App pageType="CART" />, rootNode);
        }else if (window.location.href.indexOf('/') > 1) {
            ReactDOM.render(<App pageType="PDP" />, rootNode);
        }
    }
});

const config = { subtree: true, childList: true };
observer.observe(document, config);
