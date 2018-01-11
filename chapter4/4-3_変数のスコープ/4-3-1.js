var val = 'Global';
function getVal(){
  console.log(val); //*
  var val = 'Local';
  return val;
};

console.log(getVal());
console.log(val);

/*
JSのローカル変数は関数全体で有効となる
*の時点ではすでに「val」 変数がローカル変数として解釈されている
*/ 

