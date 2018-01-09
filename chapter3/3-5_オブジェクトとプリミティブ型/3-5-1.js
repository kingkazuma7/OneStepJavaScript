var num = 999;
var num2 = new Number(999);

console.log(typeof num);
// numは数値リテラルを代入しただけなのでプリミティブ型(number)
console.log(typeof num2);
// Numberオブジェクトのインスタンス(object)が格納　

console.log(num.toString());
console.log(num2.toString());

/* =====
number,string,booleanのプリミティブ型には、
それぞれラッパーオブジェクトが存在
jsのプリミティブ型は、オブジェクトとして振る舞おうとした際に、
バックグラウンドでそれぞれの型に応じたラッパーオブジェクトが生成される
nullとundefinedはラッパーオブジェクトを持っていないためプリミティブ
===== */

