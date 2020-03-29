// Manejo del DOM

// Imprimiendo palabra incognita en pantalla
document.getElementById('unknown_word').innerHTML = `${incognitRandomWord(randomWord)}`;

for(let i = 0; i < alphabet.length; i++) {
document.getElementById('root').innerHTML += `
    <Button id="${alphabet[i]}" class="letter" value="${alphabet[i]}" onClick="getId(this)">${alphabet[i].toUpperCase()}</Button>
`};