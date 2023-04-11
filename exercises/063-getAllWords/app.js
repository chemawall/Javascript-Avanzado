function getAllWords(str) {
    // your code here
    c=str.split(' ').length
    separado = str.split(" ", c)
    return separado
    
        
    
}

//recuerda al usar split que el primer elemento es el criterio por el que va a separar, el segundo el número de separaciones
    
let output = getAllWords('Radagast the Brown');
console.log(output);