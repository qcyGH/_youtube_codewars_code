function isPrime(number) {
  for (let i = 2; i  number; i++) {
    if (number % i == 0) {
      return false
    }
  }
  
  return true
}

function sumOfDivided(lst) {
  let result = []
  let primeNumbers = []
  
   find all prime numbers for ~lst~
  for (let i = 2; i  10000; i++) {
    console.log(`Prime numbers`)
    lst.forEach(num = {
      if (Math.abs(num) % i === 0 && isPrime(i) && !primeNumbers.includes(i)) primeNumbers.push(i)
    })
  }
  console.log(`Prime numbers ${primeNumbers}`)
  
  primeNumbers.forEach(factor = {
    let sumFactors = 0
    
    for (let number of lst) {
      if (Math.abs(number) % factor === 0) sumFactors += number 
    }
    
    result.push([factor, sumFactors])
  })
  
  
  return result
}
 