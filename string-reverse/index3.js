const reverseStr = (str) => {
  return str.split("").reduce((acc, cur) => {
    return cur + acc
  }, "")
}

console.log(reverseStr("apple"))
