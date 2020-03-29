// Logica
console.log(wordList);
let incognitWord = [];

// Arroja una palabra al azar.
const randomWord = wordList[Math.floor(Math.random()*wordList.length)];

// Toma la palabra al azar y retorna en su lugar un arreglo de "_" con la misma longitud.
let incognitRandomWord = (word) => {

   for(let i = 0; i < word.length; i++) {
       incognitWord.push(word[i]);
       incognitWord[i] = '_';
   }
   return incognitWord.join(' ');
}


let getId = (elem) => {
    for(let i = 0; i < randomWord.length; i++) {
        console.log('incognitWord :', incognitWord[i]);
        if(elem.id === randomWord[i]) {
            let changeLetter = incognitWord[i] = randomWord[i].toUpperCase();
        }
    }
}

console.log(randomWord);