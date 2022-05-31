function hexFormat(number) {
  return number.length < 2 ? '0' + number : number
}

function rgb(r, g, b){
  const rgbArray = [r, g, b]
  let hex = ''
  
  for (let number of rgbArray) {
    
    if (number < 0) {
      number = 0
    } else if (number > 255) {
      number = 255
    }
    
    hex = hex + hexFormat(parseInt(number, 10).toString(16).toUpperCase())
  }
  return hex
}