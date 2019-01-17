//動的に変化する入力欄
var Nsize=1;

//入力に応じて変化する
function dynamicLength(){
  var elementReference=document.getElementById("dynamicinput");

  //backspaceを押すと入力欄のサイズを小さくする
  if(event.keyCode == 8){
    elementReference.size=Nsize;
    Nsize--;
  }else{
    //その他の入力を受けると入力欄のサイズを大きくする
    elementReference.size=Nsize;
    Nsize++;
  }
}
