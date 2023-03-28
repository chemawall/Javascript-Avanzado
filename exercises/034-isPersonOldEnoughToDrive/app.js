function isPersonOldEnoughToDrive(obj) {
  // Add your code after this line
  if (obj.age >= 16) return true
  else return false
}

let person = {
  age: 16
};
let output = isPersonOldEnoughToDrive(person);
console.log(output)