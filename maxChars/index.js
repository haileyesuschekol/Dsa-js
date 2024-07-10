const maxChar = (char) => {
  let count = 0
  let maxChar = ""
  let x = char.split("")
  let obj = {}
  for (let val of x) {
    !obj[val] ? (obj[val] = 1) : obj[val]++
  }
  for (let values in obj) {
    if (obj[values] > count) {
      count = obj[values]
      maxChar = values
    }
  }
  return { maxChar, count }
}

console.log(maxChar("hello"))
