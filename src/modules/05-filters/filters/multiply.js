export default function multiply(value1 = null, value2 = null) {
  if (value1 === null || value2 === null) {
    return null;
  } else {
    return value1 * value2;
  }
}
