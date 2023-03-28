

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

function addFullNameProperty(obj) {
  // Add your code after this line
  obj["fullName"] = obj.firstName +" "+ obj.lastName;
  return obj
};

addFullNameProperty(person);
console.log(person.fullName)

// para añadir a un objeto una nueva key usamos obj["nuevakey"]= valordelakey