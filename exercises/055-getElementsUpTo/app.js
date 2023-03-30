function getElementsUpTo(array, n) {
  // your code here
  return  array.slice(0,n-1)
}
let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output);