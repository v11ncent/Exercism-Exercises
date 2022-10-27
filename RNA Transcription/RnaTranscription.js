const toRna = (string) => {
    return [...string].map(character => swapRna(character)).join('');
};

function swapRna(character) {
    const rnaMap = new Map([['G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'U']]);
    return rnaMap.get(character);
}

// Expected output: 'UGCACCAGAAUU'
toRna('ACGTGGTCTTAA');