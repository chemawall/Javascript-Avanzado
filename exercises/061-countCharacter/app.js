function countCharacter(str, char) {
    // your code here
    let contador = 0;
    let posicion = 0;    
  while((posicion = str.indexOf(char, posicion)) !== -1)
            {
                ++contador;
                posicion  += str.lenght;
            }
    return contador;
  
}

let output = countCharacter('I am a hacker', 'a');
console.log(output);