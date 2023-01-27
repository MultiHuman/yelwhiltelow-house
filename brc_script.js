function isNon() {
  var val = document.getElementById('brc');
  if(val.options[val.selectedIndex].value == 'non'){
    return true;
  }
  return false;
}

function change(a, b, num) {
  if(a === 2 && b === 10){
    var char = num.toString();
    var len = char.length;
    var a = 1;
    var ans = 0;
    for(var i = 0; i < len; i++){
      a *= 2;
    }
    for(var i = 0; i < len; i++){
      a /= 2;
      if(char[i] === '1'){
        ans += a;
      } else if(parseInt(char[i]) > 1){
        return false;
      }
    }
    document.getElementById('print').innerText = ans;
  } else if(a === 10 && b === 2){
    if(parseInt(num) === 0){
      document.getElementById('print').innerText = 0;
      return true;
    }
    var ans = '';
    var n = 1;
    while(num >= n){
      n *= 2;
    }
    n /= 2;
    while(n >= 1){
      var ex = parseInt(num/n);
      num %= n;
      n/=2;
      ans += ex.toString();
    }
    document.getElementById('print').innerText = ans;
  }
  return true;
}

window.onload=function() {
  document.getElementById('change_button').onclick=function () {
    const v = document.getElementById('pre').value;
    if(isNaN(v)){
      alert('수를 입력해주세요.');
    } else if(isNon()){
      alert('변환할(된) 진수를 선택해 주세요.');
    } else {
      var val = document.getElementById('brc');
      var nowChoosing = val.options[val.selectedIndex].value;
      switch(nowChoosing) {
        case 'ten_to_two':
          change(10, 2, v)
          break;
        case 'two_to_ten':
          if(!change(2, 10, v)){
            alert('이진수가 아닙니다.');
          }
          break;
      }
    }
  };
}