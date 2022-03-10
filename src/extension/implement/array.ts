/**
 * 两个数组的交集
 */
Array.intersect = function intersect<T>(a: T[], b: T[]) {
  const s = new Set(a.length > b.length ? b : a);
  return (a.length > b.length ? a : b).filter(x => s.has(x));
};

/**
 * 两个数组的差集
 */
Array.minus = function minus<T>(a: T[], b: T[]) {
  const s = new Set(a.length > b.length ? b : a);
  return (a.length > b.length ? a : b).filter(x => !s.has(x));
};

/**
 * 两个数组的补集
 */
Array.complement = function complement(a, b) {
  const sa = new Set(a);
  const sb = new Set(b);
  return [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];
};

/**
 * 两个数组并集
 */
Array.union = function union<T>(a: T[], b: T[]) {
  return Array.from(new Set([...a, ...b]));
};


Array.prototype.unique = function <T>(): Array<T> {
  return Array.from(new Set(this));
};
