import React from "react"
import ReactDOM from "react-dom"
import { insertAfter } from "../lib/helpers";
import App from "./App";
import './index.css'

// Remove Any INC BLOCK
let incBlock = document.querySelector('.inc_pdp_block')
if (incBlock){
    incBlock.remove()
}

var mountNode = document.querySelector(".product-view")
let INC_PDP_BLOCK = document.createElement('inc_pdp_react_head')
insertAfter(INC_PDP_BLOCK,mountNode)

ReactDOM.render(<App/> ,INC_PDP_BLOCK)
