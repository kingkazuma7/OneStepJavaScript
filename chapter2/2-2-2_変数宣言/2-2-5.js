// グローバル変数を宣言する
var val = 'Global!';
function getValue() {
  // ローカル変数を宣言する
  var val = 'Local!';
  return val;
};

console.log(getValue());
console.log(val);
