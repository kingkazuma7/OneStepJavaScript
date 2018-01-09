var myFunc = function () {
  this.prop1 = 'bar';
}
var obj1 = new myFunc();
var obj2 = myFunc();
console.log(obj1);
console.log(obj2);

/* ===== 　
new演算子とは
オブジェクトのインスタンスを返却しなさい！
とコンストラクタに命令するための演算子

return文が明示的に指定されていない場合、
自動的に呼び出し元にはundefinedが返却
new演算子を用いて呼び出した場合は、
return文のあるなしに関わらず、自動的に
オブジェクトのインスタンスが返却される
===== */
