function isPersonOldEnoughToDrinkAndDrive(obj) {
  // the person object contains an "age" property inside
  // Add your code after this line
  if (obj.age >= 21)
    return true
  else return false
  
}

let person = {
  age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(person);
console.log(output);