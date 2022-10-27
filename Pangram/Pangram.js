const string = 'The quick brown fox jumps over the lazy dog.';

function removePunctuation(string) {
    const punctuationArray = ['.', ',', ';', '?', '!', ' ', '_'];
    string = string.toUpperCase();
    
    return Array.from(string).filter(character => !punctuationArray.includes(character)).join('');
}

function isPangram(string) {
    const alphabetArray = Array.from(('abcedfghijklmnopqrstuvwxyz').toUpperCase());
    const stringArray = Array.from(removePunctuation(string));

    return alphabetArray.every(element => stringArray.includes(element));
}

console.log(isPangram(string));
