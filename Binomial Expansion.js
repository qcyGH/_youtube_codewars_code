const generate = (ex) => {
  let result = []
  for (let i = 1; i <= ex; i++) {
      if (i == 1) result.push([1])
      else if (i == 2) result.push([1, 1])
      else {
          let preArr = result[result.length - 1]
          let arr = new Array(i)
          arr[0] = 1
          for (let j = 0; j < i - 2; j++) {
              arr[j + 1] = preArr[j] + preArr[j + 1]
          }
          arr[i - 1] = 1
          result.push(arr)
      }
  }
  return result
};

const binPow = (number, ex) => {

if (!isNaN(number)) {
  return `${Math.pow(parseInt(number, 10), ex)}`
} else if (!isNaN(parseInt(number, 10))) {
  return (ex == 1) ? `${Math.pow(parseInt(number, 10), ex)}` : `${Math.pow(parseInt(number, 10), ex)}${number.replace(/[^a-z]/gi, '')}^${ex}`
} else {
  return (ex == 1) ? `${number}` : `${number}^${ex}` 
}

}

function expand(expr) {
console.log(`Ex:       ${expr}`)

let extent = parseInt(expr.substring(expr.indexOf('^')+1), 10)

if (extent === 0) return '1'
if (extent === 1) return expr.substring(1, expr.indexOf(')'))

let a = expr.substring(1, expr.replace('+', '-').indexOf('-', 2))
let b = expr.substring(expr.replace('+', '-').indexOf('-', 2)+1, expr.indexOf(')'))

let exSymbol = (expr.indexOf('+') !== -1) ? '+' : '-'
let symbolForB = exSymbol

let binCoefficients = generate(extent + 1)
binCoefficients = binCoefficients[binCoefficients.length-1]

let binExpr = ''
binExpr = (extent % 2 === 0) ? binPow(a, extent).replace('-', '') : binPow(a, extent)

if (b == 0 && extent === 2) {
  return binExpr
}
// a = 1 || b = 1
if (!isNaN(a) && !isNaN(b)) {
  a = parseInt(a, 10)
  b = parseInt(b, 10)
  
  for (let i = 1; i <= extent-1; i++) {
    if (i != 1 && extent > 2 && symbolForB === '-') {
      exSymbol = exSymbol === '+' ? '-' : '+' 
    }
    
    binExpr = binExpr + exSymbol + (binCoefficients[i] * Math.pow(a, extent - i) * Math.pow(b, i)) 
  }
// a = 1 || b = x
} else if (!isNaN(a) && isNaN(b)) {
  a = parseInt(a, 10)
  
  for (let i = 1; i <= extent-1; i++) {
    if (i != 1 && extent > 2 && symbolForB === '-') {
      exSymbol = exSymbol === '+' ? '-' : '+' 
    }
    
    binExpr = binExpr + exSymbol + (binCoefficients[i] * Math.pow(a, extent - i)) + binPow(b, i)
  }
// a = x || b = 1
} else if (isNaN(a) && !isNaN(b)) {
  b = parseInt(b, 10)
  
  for (let i = 1; i <= extent-1; i++) {
    if (i != 1 && extent > 2 && symbolForB === '-') {
      exSymbol = exSymbol === '+' ? '-' : '+' 
    }
    
    if (!isNaN(parseInt(a, 10))) {
      if (exSymbol === '+' && `${(binCoefficients[i] * Math.pow(parseInt(a, 10), extent - i) * Math.pow(b,i))}`.indexOf('-') != -1) {
        binExpr = (extent - i) === 1 ? binExpr + (binCoefficients[i] * Math.pow(parseInt(a, 10), extent - i) * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}` : binExpr + (binCoefficients[i] * Math.pow(parseInt(a, 10), extent - i) * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}^${extent - i}` 
      } else {
        binExpr = (extent - i) === 1 ? binExpr + exSymbol + (binCoefficients[i] * Math.pow(parseInt(a, 10), extent - i) * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}` : binExpr + exSymbol + (binCoefficients[i] * Math.pow(parseInt(a, 10), extent - i) * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}^${extent - i}` 
      }
    } else {
      
      if ((extent - i) === 1) {
        if (exSymbol === '+' && a.indexOf('-') != -1) {
          binExpr = binExpr + '-' + (binCoefficients[i] * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}`
        } else {
          binExpr = binExpr + exSymbol + (binCoefficients[i] * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}` 
        }
      } else {
        if (exSymbol === '+' && a.indexOf('-') != -1) {
          if (symbolForB === '+' && (extent - i) % 2 === 0) {
            binExpr = binExpr + exSymbol + (binCoefficients[i] * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}^${extent - i}` 
          } else {
            binExpr = binExpr + '-' + (binCoefficients[i] * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}^${extent - i}`
            console.log((binCoefficients[i] * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}`)
          }
        } else {
          binExpr = binExpr + exSymbol + (binCoefficients[i] * Math.pow(b,i)) + `${a.replace(/[^a-z ]/gi, '')}^${extent - i}` 
        }
      }
    }
  }
// a = x || b = x
} else {
  for (let i = 1; i <= extent-1; i++) {
    if (i != 1 && extent > 2 && symbolForB === '-') {
      exSymbol = exSymbol === '+' ? '-' : '+' 
    }
    
    binExpr = binExpr + exSymbol + binCoefficients[i] + binPow(a, extent - i) + binPow(b, i)
  }
}

symbolForB = (exSymbol === '+' && extent > 2 && symbolForB === '-') ? '-' : '+'
binExpr = extent === 2 ? binExpr + '+' + binPow(b, extent) : binExpr + symbolForB + binPow(b, extent)

console.log(`Number a: ${a}`)
console.log(`Number b: ${b}`)
console.log(`Extent:   ${extent}`)
console.log(binCoefficients)

return binExpr.replace(/(--)/gi, '+')
}