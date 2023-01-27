function ChangeOptions() {
  var val = document.getElementById('area');
  var nowChoosing = val.options[val.selectedIndex].value;
  switch(nowChoosing) {
    case 'num_to_char':
      document.querySelector('textarea').placeholder = '32 이상의 정수를 입력해주세요.';
      document.querySelector('textarea').style.fontSize = '20px';
      break;
    case 'char_to_num':
      document.querySelector('textarea').placeholder = '문자를 입력해주세요.';
      document.querySelector('textarea').style.fontSize = '20px';
      break;
    case 'non':
      document.querySelector('textarea').placeholder = '';
      document.querySelector('textarea').style.fontSize = '20px';
      break;
  }
}

function isNon() {
  var val = document.getElementById('area');
  if(val.options[val.selectedIndex].value == 'non'){
    return true;
  }
  return false;
}

function change(char, index) {
  switch(index) {
    case 0 :
      document.getElementById('print').innerText = String.fromCharCode(char);
      break;
    case 1 :
      document.getElementById('print').innerText = char.charCodeAt(0);
      break;
  }
}

window.onload=function() {
  document.getElementById('change_button').onclick=function () {
    const v = document.getElementById('pre').value;
    if(isNon()){
      alert('어떻게 바꿀지 선택해 주세요.');
    } else {
      var val = document.getElementById('area');
      var nowChoosing = val.options[val.selectedIndex].value;
      switch(nowChoosing) {
        case 'num_to_char':
          if(isNaN(v)){
            alert('수가 아닙니다.');
          }
          change(v, 0);
          break;
        case 'char_to_num':
          change(v, 1);
          break;
      }
    }
  };
}