var Phone = function(name) {
  this.name = name;
};
var featurePhone = new Phone('feature phone'); // 1

Phone.prototype.getName = function () { // 2
  return this.name;
};

var smartPhone = new Phone('smart phone'); // 1

console.log(featurePhone.getName());
console.log(smartPhone.getName());
// インスタンス化されたオブジェクトは、使用したコンストラクタの
// prototypeプロパティに対して暗黙の参照をもつ