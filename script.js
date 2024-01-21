function displayvalue(val){
   document.getElementById("display").value=document.getElementById("display").value+val;
}
function clearDisplay()
{
	document.getElementById("display").value="";
}
function del(){
   document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
}
function calculate(){
	var userInput=document.getElementById("display").value;
    var result=eval(userInput);

    document.getElementById("display").value=result;
}
