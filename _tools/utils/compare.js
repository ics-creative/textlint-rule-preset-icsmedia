const digit = 0.00001;

const compare = (a, b) => {

  const max = Math.min(a.length, b.length);

  let aValue = 0;
  let bValue = 0;
  [...Array(max).keys()].forEach(i => {
    aValue += a.charCodeAt(i) * (digit ** (max - i));
    bValue += a.charCodeAt(i) * (digit ** (max - i));
  });
  return aValue - bValue;
};

const comparePrhItem = (x, y) => {

  const a = x.expected;
  const b = y.expected;

  return compare(a, b);
};

module.exports = {
  compare,
  comparePrhItem,
};
