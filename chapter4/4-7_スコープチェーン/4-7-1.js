/* =====
スコープチェーン、クロージャは脱初心者への最終試練
スコープチェーン...JSがどんな順序で変数やプロパティを参照するかを取り決めたルール
  ■callオブジェクトは関数を呼び出すたびに内部的に生成されるオブジェクトで、関数内のローカル変数を管理する。
  ■スコープチェーンとは、GlobalオブジェクトとCallオブジェクトを、生成した順に連結したリストのようなもの
  ■一番最初に生成されるGlobalオブジェクトを末端とし、Callオブジェクトが生成される度にその末端に紐づけるようなイメージ
  
===== */

var x = 'Global';
var y = 'Global';
function outerFunc() {
  var x = 'Local Outer';
  function innerFunc() {
    var x = 'LocalInner'

    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
    
  }

  // Local Outer // 4
  console.log(x);
  innerFunc();
  
}

// Global // 5
console.log(x);
outerFunc();

