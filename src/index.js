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
    // write your solution here
    let symb = '';
    let ch = [];
    let letter;
    let str = '';
    for (let i = 0; i < expr.length; i++) {
        symb = expr.slice(0, 10);
        for (let j = 0; j < 10; j++) {
            if (symb[j] == 1) {
                symb[j + 1] == 0 ? ch.push('.') : ch.push('-');
                j++; 
            }
            if (symb[j] == '*') {
                ch.push('');
                j+=9;
            }
        }
        symb = ch.join('');
        if (symb == '') {
            str += ' ';
        } else {
            letter = MORSE_TABLE[symb];
            str += letter;
        }
        ch = [];

        expr = expr.slice(10, expr.length);
        i--;
    }

    return str;
}

module.exports = {
    decode
}