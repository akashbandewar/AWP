function action() {
    let content = document.querySelector('#status');
    content.textContent = "ONLINE"

    //getting current time
    var today = new Date();
    var current_time = today.getHours() + ":" + today.getMinutes();

    let cin = document.querySelector("#id1").value;
    let parent = document.querySelector(".chat");

    //create 2 children for parent div
    let newdiv = document.createElement("div");
    let timechild = document.createElement("div");

    timechild.textContent = current_time;
    timechild.style.backgroundColor = "white";
    timechild.style.padding = "2px";
    timechild.style.marginRight = "5px";
    newdiv.style.fontSize = "10%";
    newdiv.style.backgroundColor = "rgba(255,255,255,0.7)";
    newdiv.style.color = "black";
    newdiv.style.fontSize = "130%";
    newdiv.style.borderRadius = "3px"
    newdiv.style.padding = "3px";
    newdiv.style.margin = "5px 5px 0px 3px";
    timechild.style.fontSize = "75%"
    newdiv.textContent = cin;
    //    newdiv.appendChild(timechild);
    parent.appendChild(newdiv);
    parent.appendChild(timechild);
    document.querySelector("#id1").value = "";
}

function typing() {
    let content = document.querySelector('#status');
    content.textContent = "TYPING...";
}

function online() {
    let content = document.querySelector('#status');
    content.textContent = "ONLINE";
}