// 高階関数とは、関数自身を引数や戻り値として扱う関数のこと
// 関数もデータの一種
function higherOrder(values, fnc) {
  for (var val in values) {
    fnc(values[val]);
  }
}
higherOrder([1,3,5], function(val) {console.log(val);
})
