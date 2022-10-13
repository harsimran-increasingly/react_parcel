require("./index.css");
require("react");
var $hPUfP$reactdom = require("react-dom");
var $hPUfP$reactjsxruntime = require("react/jsx-runtime");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






function $4e377c42f539ba61$var$App() {
    return /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
        className: "inc_pdp_block",
        children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("h2", {
            className: "inc_pdp_title",
            children: "Frequently Bought Together"
        })
    });
}
var $4e377c42f539ba61$export$2e2bcd8739ae039 = $4e377c42f539ba61$var$App;



function $d3928351bb4a0237$var$insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
// Remove Any INC BLOCK
let $d3928351bb4a0237$var$incBlock = document.querySelector(".inc_pdp_block");
if ($d3928351bb4a0237$var$incBlock) $d3928351bb4a0237$var$incBlock.remove();
var $d3928351bb4a0237$var$mountNode = document.querySelector(".product-view");
let $d3928351bb4a0237$var$INC_PDP_BLOCK = document.createElement("inc_pdp_react_head");
$d3928351bb4a0237$var$insertAfter($d3928351bb4a0237$var$INC_PDP_BLOCK, $d3928351bb4a0237$var$mountNode);
(0, ($parcel$interopDefault($hPUfP$reactdom))).render(/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)((0, $4e377c42f539ba61$export$2e2bcd8739ae039), {}), $d3928351bb4a0237$var$INC_PDP_BLOCK);


