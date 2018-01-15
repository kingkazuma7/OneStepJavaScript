function closure(initVal) {
  var count = initVal;
  var innerFunc = function() {
    return ++count;
  };
  return innerFunc;
}
var myClosure = closure(100);
  console.log(myClosure());
  console.log(myClosure());
  console.log(myClosure());
