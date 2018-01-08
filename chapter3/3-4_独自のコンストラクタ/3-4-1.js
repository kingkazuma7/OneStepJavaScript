var Member = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getinfo = function () {
    return '氏名:' + this.lastName + '' + this.firstName + '(' +
      this.age + '才)';
  }
}
var tanaka = new Member('ゴンザレス','田中',35);
console.log(tanaka.getinfo());

/* ======
jsでは関数内で呼び出すthisは関数呼び出し元のオブジェクトを参照
new演算子を使ってインスタンス化した場合、thisはそのインスタンスした場合、thisはそのインスタンス自身をさします
====== */
