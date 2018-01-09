var human = {};
human.name = 'igarashi';
human.age = 35;
human.sex = 'M';
human.getinfo = function(){
  return human.name + '' + human.age + '' + human.sex;
}
console.log(human.getinfo);

