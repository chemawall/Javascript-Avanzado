let age = prompt ("¿Qué edad tienes");

function isOldEnoughToDrink(age){ 
    let edad =  parseInt(age); 
    if (edad >= 21)
    return "ok";
    if (edad < 21)
    return "no ok";
}

console.log(isOldEnoughToDrink(age));