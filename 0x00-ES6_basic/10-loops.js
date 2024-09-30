export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const item of array) {
    narray.push((appendString + item));
  }
  return narray;
}
