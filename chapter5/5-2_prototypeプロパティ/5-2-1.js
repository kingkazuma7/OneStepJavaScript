// オブジェクトには、メンバを追加するためのprototypeプロパティというものが存在

var Phone = function(name) {
  this.name = name;
};
Phone.prototype.getName = function() {
  return this.name;
};
var featurePhone = new Phone('feature phone');
var smartPhone = new Phone('smart phone');

console.log(featurePhone.getName());
console.log(smartPhone.getName());