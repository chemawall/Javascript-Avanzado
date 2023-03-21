let age = prompt ("¿Qué edad tienes");
let edad =  parseInt(age); 


function isOldEnoughToDrive(age){ 
   
    if(age > 16) return true;
      else return false;
}

console.log(isOldEnoughToDrive(age));
