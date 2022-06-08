function solution(input, markers) {
  input = input.split('')
  
  for (let marker of markers) {
    let markerIndex = input.indexOf(marker)
    let lineBreakIndex = input.indexOf('\n')
     
    if (input.indexOf('\n', markerIndex) != -1) {
      input.splice(markerIndex - 1, (lineBreakIndex - markerIndex + 1))
    } else {
      input.splice(markerIndex - 1, (input.length - markerIndex + 1))
    }
  }
  
  return input.join('')
};