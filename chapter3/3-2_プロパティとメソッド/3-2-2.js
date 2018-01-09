var human = {
  name: 'igarashi',
  age: 35,
  sex: 'M',
  getinfo: function () {
    return human.name + '' + human.age + '' + human.sex;
  }
}  
console.log(human.getinfo);

