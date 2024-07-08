const reverseStr = (str) => {
  let rev = ""
  let arr = str.split("")
  for (char of arr) {
    rev = char + rev
  }
  return rev
}

console.log(reverseStr("apple"))
