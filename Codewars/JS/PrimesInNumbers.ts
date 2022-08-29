const { ceil } = Math;

const primeFactors = (n: number): string => {
  const checkIsPrime = (numToCheck: number): boolean => {
    for (let i = 2; i <= ceil(numToCheck / 2); i++) {
      if (numToCheck % i === 0) return false;
    }
    return true;
  };

  const factors: { [key: string]: number } = {};
  while (n !== 1) {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0 && checkIsPrime(i)) {
        !factors[i] ? (factors[i] = 1) : factors[i]++;
        n /= i;
        --i;
      }
    }
  }

  return Object.keys(factors).reduce((prev, cur) => {
    return factors[cur] === 1
      ? `${prev}(${cur})`
      : `${prev}(${cur}**${factors[cur]})`;
  }, "");
};
console.log(primeFactors(7775460));

// console.log(125);
