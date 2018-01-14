var addFunc = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
}
addFunc(1, 1);
addFunc(1,2,3,4,5);
