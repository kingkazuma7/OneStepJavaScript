function showInfo(args) {
  var name = args.name;
  var age = args.age;

  console.log(name + '' + age);
}
showInfo({ name: 'iga', age: 35 });
showInfo({ age: 37, name:'tara' });
