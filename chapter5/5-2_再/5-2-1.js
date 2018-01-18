// prototypeプロパティを使って、オブジェクトにメソッドを追加
var Phone = function(name) {
  this.name = name;
};
Phone.prototype.getName = function() {
  return this.name;
};
var featurePhone = new Phone('feature phone');
var samartPhone = new Phone('smart phone');

console.log(featurePhone.getName());
console.log(samartPhone.getName());