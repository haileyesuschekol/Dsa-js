const anagramSort = (strA, strB) => {
  if (clearStr(strA) === clearStr(strB)) {
    return true
  } else return false
}

const clearStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

console.log(anagramSort("hello there!", "hello there!"))
