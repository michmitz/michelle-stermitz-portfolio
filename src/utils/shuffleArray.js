export const shuffleArray = (arr) => {
  let counter = arr.length, temp, index;

  while(counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

