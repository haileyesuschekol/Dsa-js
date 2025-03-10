// anagram
const anagram = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }
  return true
}

const buildCharMap = (str) => {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

console.log(anagram("hello", "hello"))
