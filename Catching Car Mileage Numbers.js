function shortInterest(number, awesomePhrases) {

    // A number is only interesting if it is greater than 99!
  if (number < 100) return 0

  // The digits match one of the values in the ~awesomePhrases~ array
  if(awesomePhrases.includes(number)) return 2

  number = number.toString()
  
  // Any digit followed by all zeros
  let zeroNumbers = 0
  for (let symbol of number.slice(1)) {
    if (symbol === '0') zeroNumbers += 1
  }
  
  if (zeroNumbers === number.slice(1).length) return 2

  // Every digit is the same number
  let sameDigits = 0
  for (let symbol of number) {
    if (symbol === number[0]) sameDigits += 1
  }
  
  if (sameDigits === number.length) return 2
  
  // The digits are sequential, incementing
  let digitsIncementing = 0
  let firstSymbol = parseInt(number[0], 10)
  for (let symbol of number) {
    if (symbol == firstSymbol) digitsIncementing += 1
    firstSymbol += 1
  }
  
  if (digitsIncementing === number.length || digitsIncementing === number.length-1 && number.slice(-1) == 0 && number.slice(-2, -1) == 9) return 2

  // The digits are sequential, decrementing
  let digitsDecementing = 0
  firstSymbol = parseInt(number[0], 10)
  for (let symbol of number) {
    if (symbol == firstSymbol) digitsDecementing += 1
    firstSymbol -= 1
  }
  
  if (digitsDecementing === number.length || digitsDecementing === number.length-1 && number.slice(-1) == 0 && number.slice(-2, -1) == 1) return 2
  
  // The digits are a palindrome
  if (number === number.split('').reverse().join('')) return 2  
  
  return -1
}

function isInteresting(number, awesomePhrases) {
  console.log(number)
  
  for (let i = 0; i <= 3; i++) {
    let result = shortInterest(number, awesomePhrases)
    console.log(`number ${number}\nresult ${result}`)
    
    if (i === 3) return 0
    
    if (result === 2 && i === 0) {
      return 2
    } else if (result === 2 && i >= 1) {
      return 1
    } else if (result === -1 || result === 0 && i <= 2) {
    
    } else {
      return 0
    }
    
    number += 1
  }
}