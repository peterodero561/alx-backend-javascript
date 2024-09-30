export default function appendToEachArrayValue(array, appendString) {
  let newArray = []
  for (let arr of array) {
    let value = appendString + arr;
    newArray.push(value)
  }

  return newArray;
}
