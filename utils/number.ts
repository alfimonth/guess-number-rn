const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    console.log('Generating random number: ', randomNumber)
    return randomNumber;
  }
};

export { generateRandomBetween };
