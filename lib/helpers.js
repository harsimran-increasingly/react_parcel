export function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
});
