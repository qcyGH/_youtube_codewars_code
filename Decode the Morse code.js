decodeMorse = function(morseCode){
  morseCode = morseCode.trim()
  let hmString = ''
  const arrayMorseCode = morseCode.split(' ')
  
  while (arrayMorseCode.indexOf('') !== -1) {
    let indexOfUndefined = arrayMorseCode.indexOf('')
    arrayMorseCode.splice(indexOfUndefined, 2, ' ')
  }
  
  for (let symbol of arrayMorseCode) {
    hmString = symbol !== ' ' ? hmString + MORSE_CODE[symbol] : hmString + ' '
  }
  
  return hmString
}