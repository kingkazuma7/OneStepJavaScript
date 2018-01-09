var myFunc = function () {
  this.prop1 = 'bar';
  this.prop2 = 'foo';
  this.method = function () {
    return this.prop1 + this.prop2;
  }
}
var obj1 = new myFunc();
var obj2 = myFunc();
console.log(obj1.method());
console.log(obj2.method()); //error

