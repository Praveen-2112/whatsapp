var icon = document.getElementById("ico");
var card = document.getElementById("card");
var send = document.getElementById("chat");

icon.addEventListener("click", function () {
    var input = document.getElementById("int");
    var output = input.value;

  

    var div1=document.createElement("div");
    div1.classList.add("color");
    div1.innerHTML=output;

    var send = document.getElementById("chat");
    send.appendChild(div1);


})