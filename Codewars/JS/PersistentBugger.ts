export function persistence(num: number, times = 0): number {
  if (num.toString().length === 1) return times;

  const multi: number = num
    .toString()
    .split("")
    .reduce((prev, next) => prev * +next, 1);

  return persistence(multi, ++times);
}

console.log(persistence(999));
