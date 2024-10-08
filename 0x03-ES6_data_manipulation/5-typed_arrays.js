export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const dataView = new DataView(new ArrayBuffer(length), 0, length);
  dataView.setInt8(position, value);
  return dataView;
}
