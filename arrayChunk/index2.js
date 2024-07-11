const chunk = (data, size) => {
  const chunk = []
  let index = 0

  while (index < data.length) {
    chunk.push(data.slice(index, index + size))
    index += size
  }
  console.log(chunk)
}

const data = [1, 24, 5, 5, 78, 6, 3]
const size = 2
chunk(data, size)
