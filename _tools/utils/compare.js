const digit = 100;

const compare = (a, b) => a.localeCompare(b);

const comparePrhItem = (x, y) => {
  const a = x.expected;
  const b = y.expected;

  return compare(a, b);
};

module.exports = {
  compare,
  comparePrhItem,
};
