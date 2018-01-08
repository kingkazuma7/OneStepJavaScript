for (var i = 0; i < 100; i++) {
  // iが2以上になったらループを抜ける
  if (i >= 2) {
    break;
  }
  console.log(i);
}

for (var i = 0; i < 5; i++) {
  // iが3以外の場合はスキップ
  if (i!= 3) {
    continue;
  }
  console.log(i);
}

lbl: for (var i = 1; i < 1000; i++) {
  for (var t = 1; t < 10; t++) {
    var v = i * t;
    // vが5以上になったらネストされたループを脱出する
    if (v > 5) {
      break lbl;
    }
    console.log(v);
  }
}
