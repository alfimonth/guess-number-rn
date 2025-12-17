export const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  console.log("generate number from: ", min, "-", max);
  if (min > max) {
    throw new Error(`Invalid range: min(${min}) > max(${max})`);
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomNumber === exclude && min !== max) {
    return generateRandomBetween(min, max, exclude);
  }

  return randomNumber;
};
