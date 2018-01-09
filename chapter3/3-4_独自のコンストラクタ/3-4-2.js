/* =====
js関数内で呼び出すthisは関数呼び出し元のオブジェクト参照
new演算子を使ってインスタンス化した場合、thisはそのインスタンスじしんをさす
===== */

var Member = function (firstName, lastName, age) {
  this.firstName;
  this.lastName;
  this.age = age;
  this.getinfo = function () {
    return '氏名:' + this.lastName + '' + this.firstName +
      '(' + this.age + '歳)';
  }
}
var alex = new Member('アレックス', '斎藤', 35);
var jyon = new Member('ジョン', '田中', 34);

console.log(alex.getinfo());
console.log(jyon.getinfo());
