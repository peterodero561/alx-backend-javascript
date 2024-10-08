export default function hasValuesFromArray(set, array) {
  const newList = [];
  array.forEach((elem) => {
    if (set.has(elem)) {
      newList.push(true);
    } else {
      newList.push('false');
    }
  });

  if (newList.includes('false')) { return false; }
  return true;
}
