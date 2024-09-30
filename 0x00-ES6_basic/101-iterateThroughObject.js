export default function iterateThroughObject(reportWithIterator) {
  let data = [];
  for (const i of reportWithIterator) {
    data.push(i);
  }
  data = data.join(' | ');
  return data;
}
