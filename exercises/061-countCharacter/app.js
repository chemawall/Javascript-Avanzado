function countCharacter(str, char) {
    // your code here
let count = 0;
   for (i=0; i < str.length; i++){
    if (str.charAt(i) === char){
        count++;
    }
   }
   return count
   }
    
let output = countCharacter('I am a hacker', 'a');
console.log(output);