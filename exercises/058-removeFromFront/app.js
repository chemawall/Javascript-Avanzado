function removeFromFront(arr) {
    // your code here
    return arr.shift() + "," + arr 
}

let output = removeFromFront([4, 2, 3, 4, 5]);
console.log(output)