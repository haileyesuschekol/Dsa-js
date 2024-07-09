const reverseInt2 = (val) => {
  const reversed = val.toString().split("").reverse().join("")
  return parseInt(reversed) * Math.sign(val)
}
console.log(reverseInt2(-23))
