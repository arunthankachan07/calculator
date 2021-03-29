function displayText(num){
    var input=document.querySelector("#displayBox");
    input.value+=num;
}
function calculate(){
var curval=document.querySelector("#displayBox").value;
var res=eval(curval);

var input=document.querySelector("#displayBox").value=res;

}
function backSpace(){
    var curval=document.querySelector("#displayBox").value;
    var res= curval.slice(0,-1)
    var input=document.querySelector("#displayBox").value=res;
}