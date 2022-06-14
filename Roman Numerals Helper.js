const RomanNumerals = {
  toRoman: function(number) {
    const RomanAlphabet = {
      '+2000': 'MM',
      '+1000': 'M',
      '+900': 'CM',
      '+500': 'D',
      '+400': 'CD',
      '+100': 'C',
      '+90': 'XC',
      '+50': 'L',
      '+40': 'XL',
      '+10': 'X',
      '+9': 'IX',
      '+5': 'V',
      '+4': 'IV',
      '+1': 'I'
    }
    
    let symbol = ''
    do {
      for (let num in RomanAlphabet) {
        num = parseInt(num.substr(1), 10)
        if (number - num >= 0) {
          symbol = symbol + RomanAlphabet[`+${num}`]
          number -= num
          break
        }
      }
      
    } while(number != 0)
      
    return symbol
  },
  fromRoman: function(symbol) {
    const RomanAlphabet = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    
    let number = 0
    const symbols = [...symbol]
    let doubleWord = false
    
    symbols.forEach((sym, index) => {
      
      if (doubleWord) {
        doubleWord = false
      } else {
        if (RomanAlphabet[sym] < RomanAlphabet[symbols[index + 1]] && index != symbols.length-1) {
          number += (RomanAlphabet[symbols[index + 1]] - RomanAlphabet[sym])
          doubleWord = true
        } else if (!doubleWord) {
          number += RomanAlphabet[sym]
        }
      }
    })
    
    console.log(`Number: ${number}`)
    return number
  }
}