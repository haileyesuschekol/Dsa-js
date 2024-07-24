const capitlize = (str) => {
  const first = str.slice(0, 1).toUpperCase()
  const last = str.slice(1)
  console.log(first + last)
}

console.log(capitlize("hello"))
