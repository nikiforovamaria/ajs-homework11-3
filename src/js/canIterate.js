export default function canIterate(value) {
  if (value !== null && value[Symbol.iterator] !== undefined) {
    return true;
  }
  return false;
}
