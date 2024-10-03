export default function divideFunction(numerator, denominator) {
  if (numerator !== 0 && denominator !== 0) {
    return (numerator / denominator);
  }
  throw new Error('cannot divide by 0');
}
