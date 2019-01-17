//キーボードver2
var Active;
var Position;
var keyPanelId = "keypanel";

//start keypanel
function startKeyPanel(){
  document.onclick = dispPanel;

  var bd = document.getElementsByTagName('body')[0];

  var keyPanel = document.createElement('div');
  keyPanel.setAttribute('id',keyPanelId);
  bd.appendChild(keyPanel);
  setKeyMode('⇑');
  keyPanel.style.display = "none";
}

//click event
function setKey(){
  if(this.value=="Delete panel"){
    Active = "";
    document.getElementById(keyPanelId).style.display = "none";
  }else if(this.value=="☒"){
    if(Active.value.length>=1){
      if(Position==0){
        Active.value = Active.value.substring(0, Active.value.length-1);
      }else{
        Active.value = Active.value.substring(0, Position-1)+Active.value.substring(Position, Active.value.length);
        Position =Position-1;
      }
    }
  }else if(this.value=="⇧"||this.value=="⇑"||this.value=="123"){
    setKeyMode(this.value);
  }else if(this.value=="space"){
    Active.value = Active.value.substring(0, Position)+" "+Active.value.substring(Position,Active.value.length);
    Position = Position+1;
  }else if(this.value=="shift"){
    $(function() {
      $( "#draggable" ).draggable();
    });
  }else{
    Active.value =　Active.value.substring(0,Position)+this.value+Active.value.substring(Position,Active.value.length);
    Position = Position+1;
  }
  document.getElementById('henkan').innerHTML='';
}

//select input type
function dispPanel(){
	if(document.activeElement.type=="text"){
		Active = document.activeElement;
		document.getElementById(keyPanelId).style.display="block";
		Position=Active.selectionStart;
//console.log(Active.selectionStart);
	}
  if(document.activeElement.type=="textarea"){
		Active = document.activeElement;
		document.getElementById(keyPanelId).style.display="block";
		Position=Active.selectionStart;
//console.log(Active.selectionStart);
	}
}

//display keydoard
function setKeyMode(code){
  var keyPanel = document.getElementById(keyPanelId);
	if(code=='⇑'){
    keyPanel.innerHTML+='<input type="button" value="q"><input type="button" value="w"><input type="button" value="e"><input type="button" value="r"><input type="button" value="t"><input type="button" value="y"><input type="button" value="u"><input type="button" value="i"><input type="button" value="o"><input type="button" value="p"><br>';
    keyPanel.innerHTML+='<input type="button" value="shift"><input type="button" value="a"><input type="button" value="s"><input type="button" value="d"><input type="button" value="f"><input type="button" value="g"><input type="button" value="h"><input type="button" value="j"><input type="button" value="k"><input type="button" value="l"><br>';
    keyPanel.innerHTML+='<input type="button" value="⇧"> <input type="button" value="z"><input type="button" value="x"><input type="button" value="c"><input type="button" value="v"><input type="button" value="b"><input type="button" value="n"><input type="button" value="m"> <input type="button" value="☒"><br>';
    keyPanel.innerHTML+='<input type="button" value="123"><input type="button" value="space" class="spacekey"><input type="button" value="Delete panel"><br>'
  }else if(code=='⇧'){
    keyPanel.innerHTML+='<input type="button" value="Q"><input type="button" value="W"><input type="button" value="E"><input type="button" value="R"><input type="button" value="T"><input type="button" value="Y"><input type="button" value="U"><input type="button" value="I"><input type="button" value="O"><input type="button" value="P"><br>';
    keyPanel.innerHTML+='<input type="button" value="shift"><input type="button" value="A"><input type="button" value="S"><input type="button" value="D"><input type="button" value="F"><input type="button" value="G"><input type="button" value="H"><input type="button" value="J"><input type="button" value="K"><input type="button" value="L"><br>';
    keyPanel.innerHTML+='<input type="button" value="⇑"> <input type="button" value="Z"><input type="button" value="X"><input type="button" value="C"><input type="button" value="V"><input type="button" value="B"><input type="button" value="N"><input type="button" value="M"> <input type="button" value="☒"><br>';
    keyPanel.innerHTML+='<input type="button" value="123"><input type="button" value="space" class="spacekey"><input type="button" value="Delete panel"><br>'
  }else if(code=='123'){
    keyPanel.innerHTML+='<input type="button" value="1"><input type="button" value="2"><input type="button" value="3"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="0"><br>';
    keyPanel.innerHTML+='<input type="button" value="-"><input type="button" value="/"><input type="button" value=":"><input type="button" value=";"><input type="button" value="("><input type="button" value=")"><input type="button" value="$"><input type="button" value="&"><input type="button" value="@"><input type="button" value="”"><br>';
    keyPanel.innerHTML+='<input type="button" value="⇑"> <input type="button" value="."> <input type="button" value=","> <input type="button" value="?"> <input type="button" value="!"> <input type="button" value="’"> <input type="button" value="☒"><br>';
    keyPanel.innerHTML+='<input type="button" value="123"><input type="button" value="space" class="spacekey"><input type="button" value="Delete panel"><br>'
  }
  keyPanel.innerHTML+='';
  var btn = keyPanel.getElementsByTagName("input");
  var len = btn.length;
  for(var i=0; i<len; i++){btn[i].onclick=setKey;}
}
startKeyPanel();
