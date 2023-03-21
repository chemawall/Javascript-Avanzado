let age = prompt ("¿Que edad tienes");
function isOldEnoughToDrinkAndDrive(age) {
    let edad =  parseInt(age); 
    if (edad >= 21)
    return "ok";
    if (edad < 21)
    return "no ok";
}