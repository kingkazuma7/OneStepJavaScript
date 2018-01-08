var member = ['たろう', 'じろう', 'さぶろう'];
for (var m in member) {
  console.log('名前は' + m);
}
// 配列の場合、仮変数に格納されるのはインデックス番号となる。

var member = ['たろう', 'じろう', 'さぶろう'];
for (var m in member) {
  console.log('名前は' + member[m]);
}

var square = { width: 100, height: 200 };
for (var s in square) {
  console.log(s + '=' + square[s]);
}

var company = new Object();
company.name = 'Kinky-do';
company.director = 'igarashi';
for (var c in company) {
  console.log(c + 'は' + company[c]);
}
