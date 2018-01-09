var myFunc = function () {
  this.prop = 'bar';
  return 'boo';
}
var obj1 = new myFunc();
var obj2 = myFunc();
console.log(obj1);
console.log(obj2);


/* ===== 　
・return文のあるなしに関わらずオブジェクトのインスタンスを返却
・new演算子を用いない場合は、ただの関数呼び出し
===== */
