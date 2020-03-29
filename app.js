// Logica
console.log(wordList)

let randomWord = wordList[Math.floor(Math.random()*wordList.length)];

let incognitRandomWord = (word) => {
    let incognitWord = [];

   for(let i = 0; i < word.length; i++) {
       incognitWord.push(word[i]);
   }
   return incognitWord.join(' ') ;
}

console.log(randomWord)