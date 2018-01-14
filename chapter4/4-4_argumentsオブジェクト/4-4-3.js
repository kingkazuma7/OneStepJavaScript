var addFunc = function (val1, val2) {
  if (arguments.length != 2) {
    throw new Error('引数が不正です。');
  }
  console.log(val1 + val2);
}
addFunc(10, 10);
addFunc(1);
