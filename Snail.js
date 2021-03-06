const snail = (array) => {
  
  let result = []
  
  while (array[0] !== undefined) {
    
    // right
    if (array[0] === undefined) break
    array[0].forEach(number => result.push(number))
    array.splice(0, 1)
    
    // down
    if (array[0] === undefined) break
    array.forEach((item, index) => {
      result.push(item[item.length-1])
      array[index].splice(item.length-1)
    })
    
    // left
    if (array[0] === undefined) break
    array[array.length-1].reverse().forEach(number => result.push(number))
    array.splice(-1, 1)
    
    // up
    if (array[0] === undefined) break
    array.reverse().forEach((item, index) => {
      result.push(item[0])
      array[index].splice(0, 1)
    })
    array.reverse()
    
  }
  
  return result
}