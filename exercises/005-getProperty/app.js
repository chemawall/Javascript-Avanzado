
function getProperty(obj,key){
    return obj[key];
};

const car = {
  model: "Toyota",
  color: "Blue"

};

let output = getProperty(car, "model");
console.log(output);