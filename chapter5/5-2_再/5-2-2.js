var Phone = function(name) {
  this.name = name;
};

var featurePhone = new Phone('feature phone');

Phone.prototype.getName = function() {
  return this.name;
};

var smartPhone = new Phone('smart phone');

console.log(featurePhone.getName());
console.log(smartPhone.getName());