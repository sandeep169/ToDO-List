
var nodelist = document.getElementsByTagName("LI");
var i;
for (i =0; i <nodelist.length;i++){
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00d7");
   span.className= "close";
   span.appendChild(txt);
   nodelist[i].appendChild(span);
}

//onclicking cross sign list item will remove
var close = document.getElementsByClassName("close");
for (var i = 0; i<close.length;i++){
    // document.getElementById("li")
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display="none"
    }
}
function newElement(){
    var li = document.createElement("LI");
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    //trim to remove space form both side of the string
    if (inputValue==="" || inputValue.trim().length===0){
        alert("you should write something");
    }
    else{
        document.getElementById("myUL").appendChild(li);
        li.className="list-group-item ls";
    }
    //remove text form the input box after submitting the input
    document.getElementById("myInput").value="";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    for( var i=0;i <close.length;i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }

}
//trigger enter event

var input= document.getElementById("myInput");
input.addEventListener("keyup",function(event){
 //enter button code is 13
 if(event.keyCode===13){
     //cancel the default action, if needed
     event.preventDefault();
     //trigger the button element with a click
     document.getElementById('myBtn').click();

 }
});