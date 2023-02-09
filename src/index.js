const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = expr.match(/.{1,10}/g);
    res = res.map((charb)=>charb.match(/.{1,2}/g).map(
        function(charb){
            switch(charb){
                case "00": return "";
                case "10": return "\.";
                case "11": return "\-";
                case "**": return " ";
            }
        }
        ).join('').trim());
    let finish = "";
    for(char of res)
        if(char === "") finish = finish + " ";
        else finish = finish + MORSE_TABLE[char];
    return finish;
}


module.exports = {
    decode
}