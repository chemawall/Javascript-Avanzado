function addToFront(arr, element) {
  // your code here
  arr.unshift(element)
  return arr
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//importante la diferencia entre usar corchetes (para acceder a la posición del array) y usar paréntesis (para añadir un elemento al array)