const writeCards = (arr, msg) => {
  const newArr = [];
  for(const person in arr) {
    newArr.push(`Thank you, ${arr[person]}, for the wonderful ${msg} gift!`);
  }
  return newArr;
}

const countDown = (n) => {
  for(let i = n; i >=0; i--) {
    console.log(i);
  }
}