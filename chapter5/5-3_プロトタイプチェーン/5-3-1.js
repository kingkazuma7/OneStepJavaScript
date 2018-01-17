var Phone = function() {};
Phone.prototype = {
  getOwner:function() {console.log('Owner is', this.owner);}
};

var SmartPhone = function(owner) {this.owner = owner};
SmartPhone.prototype = new Phone(); // 1
SmartPhone.prototype.tap = function() {console.log('tap!');};

var myPhone = new SmartPhone('igarashi');
myPhone.getOwner(); // 2 Owner is igarashi
myPhone.tap(); //tap

var otherPhone = new SmartPhone('tarama');
otherPhone.getOwner(); // Owner is tarama
otherPhone.tap();