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
    let arr = [];
    let el = [];
    let char;
    let letter = [];

    while (expr.length >= 9) {
      el =  expr.split('', 10);
      if ( el[0] === '*' ) arr.push( ' ' );

      expr = expr.slice(10);

      char = el.indexOf('1');
      el.splice(0, [char] );

      for ( i = 1; i <= el.length; i++ ) {
        if ( i % 2 === 0 ) {
          if ( el[i - 1] === '0' ) letter.push( '.' );
          if ( el[i - 1] === '1' ) letter.push( '-' );
        }
      }

      arr.push(MORSE_TABLE[letter.join('')]);
      letter = [];
    }

    return arr.join('');
}

module.exports = {
    decode
}