function sumVal(...args) {
  let result = 0;
  for (let arg of args) {
    result += arg;
  }
  console.log(result);
}

sumVal(1,2,3);
sumVal(10,100,1000);