const reverseInt = (val) => {
  let str = val.toLocaleString().split("").reverse()
  let n = str.filter((value) => {
    return value !== "0"
  })
  //handle -ve values
  for (num of n) {
    if (num === "-") {
      n.pop()
      n.unshift("-")
    }
  }

  return parseInt(n.join(""))
}

console.log(reverseInt(-89))
