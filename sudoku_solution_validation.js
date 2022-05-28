function validSolution(board){
  for (let i = 0; i <= 8; i++) {
    let indexOfZero = board[i].indexOf(0)
    if (indexOfZero !== -1) {
      console.log('error')
      return false
    }
  }
  
  let startIndex = 0
  let startArray = 0
  
  for (let i = 0; i <= 8; i++) {
    let tempArray = []
    let cellSum = 0
    
    if (i % 3 === 0 && i !== 0) {
        startArray += 3
        startIndex = 0
    }
    
    for (let row = startArray; row <= startArray+2; row++) {

      for (let column = startIndex; column <= startIndex+2; column++) {
        tempArray.push(board[row][column])
      }
    }
    startIndex += 3
    
    tempArray.forEach(e => cellSum += e)
    
    if (cellSum !== 45) return false
  }
  
  return true
}