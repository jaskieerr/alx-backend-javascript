export default function hasValuesFromArray(set, arr) {
  if (Array.isArray(arr) && set instanceof Set) {
    return arr.every((val) => set.has(val));
  }
  return (false);
}
