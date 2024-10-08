export default function cleanSet(set, startString) {
  const stringLen = startString.length;
  if (stringLen === 0) { return ''; }
  const newList = [];
  const arrayFromSet = [...set];
  arrayFromSet.forEach((str) => {
    if (str.startsWith(startString)) {
      const newElement = str.slice(stringLen);
      newList.push(newElement);
    }
  });
  return newList.join('-');
}
