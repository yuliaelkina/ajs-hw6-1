export default function sortingByProps(obj, sortOrder) {
  const heroCardStart = [];
  const heroCardEnd = [];
  heroCardStart.length = sortOrder.length;
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (sortOrder.includes(prop)) {
        heroCardStart[sortOrder.indexOf(prop)] = { key: prop, value: obj[prop] };
      }
      else {
        heroCardEnd.push({ key: prop, value: obj[prop] });
      }
    }
  }
  heroCardEnd.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
  const heroCard = [].concat(heroCardStart, heroCardEnd);
  return heroCard;
}
