function closure(initVal) {
  var count = initVal;
  var innerFunc = function() {
    return ++count;
  };
  return inerFunc;
}
var myClosure = closure(100);
var myClosure2 = closure(200);
  console.log(myClosure());
    console.log(myClosure());
      console.log(myClosure2());
            console.log(myClosure2());
              console.log();

             console.log(); 