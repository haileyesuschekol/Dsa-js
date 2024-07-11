const chunk = (data, chunkSize) => {
  let chunked = []

  //loop
  for (let element of data) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === chunkSize) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  console.log(chunked)
}

const data = [1, 2, 3, 4, 34, 3, 4]
const chunkSize = 2
chunk(data, chunkSize)
