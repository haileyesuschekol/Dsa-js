const data = [
  { name: "meta", stock: 240 },
  { name: "x", stock: 100 },
  { name: "amazon", stock: 500 },
]

const sortAlgo = (data) => {
  return data.stock
}

data.sort((a, b) => {
  const val1 = sortAlgo(a)
  const val2 = sortAlgo(b)
  if (typeof val1 === "string") {
    return val1.localeCompare(val2) * order
  } else {
    return val1 - val2
  }
})

console.log(data)
