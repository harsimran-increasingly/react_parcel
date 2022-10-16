import React from "react";
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
        document.querySelector(".p-6");
    let INC_PDP_BLOCK = document.createElement("inc_pdp_react_head");
    insertAfter(INC_PDP_BLOCK, mountNode);
    return INC_PDP_BLOCK;
}

let rootNode = cleanup();
ReactDOM.render(<App />, rootNode);

// Re-Render Compononent On Change
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
    if (location.href !== previousUrl) {
        previousUrl = location.href;
        // let rootNode = cleanup();
        // ReactDOM.render(<App />, rootNode);
    }
});
const config = { subtree: true, childList: true };
observer.observe(document, config);
