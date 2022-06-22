function formatDuration (seconds) {
  if (seconds === 0) return 'now'
  
  let years = 0
  let days = 0
  let hours = 0
  let minutes = 0
  
  let result = ''
  
  // years
  if (seconds >= 31536000) {
    years = parseInt(seconds / 31536000, 10)
    seconds = seconds - (years * 31536000)
    
    result = (years === 1) ? result + `${years} year` : result + `${years} years`
  }
  
  // days
  if (seconds >= 86400) {
    days = parseInt(seconds / 86400, 10)
    seconds = seconds - (days * 86400)
    
    result = (days === 1) ? result + `${days} day` : result + `${days} days`
  }
  
  // hours
  if (seconds >= 3600) {
    hours = parseInt(seconds / 3600, 10)
    seconds = seconds - (hours * 3600)
    
    result = (hours === 1) ? result + `${hours} hour` : result + `${hours} hours`
  }
  
  // minutes
  if (seconds >= 60) {
    minutes = parseInt(seconds / 60, 10)
    seconds = seconds - (minutes * 60)
    
    if (seconds > 0) {
      result = result + `${minutes} minute and ${seconds} second`
      
      if (minutes > 1) result = result.replace('minute', 'minutes')
      if (seconds > 1) result = result.replace('second', 'seconds')
      
    } else {
      result = minutes === 1 ? result + `${minutes} minute` : result + `${minutes} minutes`
    }
    
  } else if (seconds > 0) {
    result = (seconds === 1) ? result + `${seconds} second` : result + `${seconds} seconds`
  }
  
  let yearsIndex = 0
  
  // year fix
  if (years > 0 && days > 0 && hours > 0 && minutes > 0) {
    result = result.split('')
    yearsIndex = result.indexOf('r')
    console.log(yearsIndex)
    
    if (years === 1) {
      result.splice(yearsIndex + 1, 0, `, `)
    } else {
      result.splice(yearsIndex + 2, 0, `, `)
    }
    result = result.join('')
  }
  
  // days fix
  if (days > 0 && minutes > 0) {
    result = result.split('')
    
    if (days === 1) {
      result.splice(result.indexOf('y', yearsIndex + 2) + 1, 0, `, `)
    } else {
      result.splice(result.indexOf('y', yearsIndex + 2) + 2, 0, `, `)
    }
    result = result.join('')
  }
  
  // hours fix
  if (hours > 0 && minutes > 0 && seconds > 0) {
    result = result.split('')
    
    if (hours === 1) {
      result.splice(result.indexOf('r', yearsIndex + 2) + 1, 0, `, `)
    } else {
      result.splice(result.indexOf('r', yearsIndex + 2) + 2, 0, `, `)
    }
    result = result.join('')
  }
  
  // hours fix 2
  if (hours > 0 && ((minutes > 0 && seconds === 0) || (seconds > 0 && minutes === 0)))  {
    result = result.split('')
    
    if (hours === 1) {
      result.splice(result.indexOf('r', yearsIndex + 2) + 1, 0, ` and `)
    } else {
      result.splice(result.indexOf('r', yearsIndex + 2) + 2, 0, ` and `)
    }
    result = result.join('')
  }
  
  console.log(result)
  return result
}