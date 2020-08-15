function action() {
    //      getting current time
    var today = new Date();
    var current_time = today.getHours() + ":" + today.getMinutes();
    let content = document.querySelector('#status1');
    content.textContent = "Online";
    let cin = document.querySelector("#id1").value;

    if (cin != "") {
        document.querySelector("#id1").value = "";

        let parent = document.querySelector(".chat");
        let parent1 = document.querySelector(".chat1");

        //      create children
        let maindiv = document.createElement("div");
        let maindiv1 = document.createElement("div");
        let newdiv = document.createElement("div");
        let timechild = document.createElement("div");
        let newdiv1 = document.createElement("div");
        let timechild1 = document.createElement("div");

        //      assign children
        parent.appendChild(maindiv);
        maindiv.appendChild(newdiv);
        maindiv.appendChild(timechild);
        parent1.appendChild(maindiv1);
        maindiv1.appendChild(newdiv1);
        maindiv1.appendChild(timechild1);

        maindiv.style.display = "flex";
        maindiv.style.justifyContent = "flex-end";
        maindiv1.style.display = "flex";
        maindiv1.style.justifyContent = "flex-start";

        //      left window
        newdiv.style.backgroundColor = "rgba(0,0,0,1)";
        newdiv.style.color = "white";
        newdiv.style.fontSize = "120%";
        newdiv.style.padding = "3px 3px 0 3px";
        newdiv.style.margin = "5px 0px 0px 50px";
        newdiv.textContent = cin;

        timechild.style.backgroundColor = "rgba(0,0,0,1)";
        timechild.style.fontSize = "70%";
        timechild.style.color = "white";
        timechild.style.padding = "0 0 0 5px";
        timechild.style.margin = "5px 5px 0px 0px";

        timechild.textContent = current_time;

        //      right window
        newdiv1.style.backgroundColor = "darkslategray";
        newdiv1.style.color = "white";
        newdiv1.style.fontSize = "120%";
        newdiv1.style.padding = "3px 3px 0 3px";
        newdiv1.style.margin = "5px 0px 0px 5px";
        newdiv1.textContent = cin;

        timechild1.style.backgroundColor = "darkslategray";
        timechild1.style.fontSize = "70%"
        timechild1.style.color = "white";
        timechild.style.padding = "0 0 0 5px";
        timechild1.style.margin = "5px 50px 0px 0px";

        timechild1.textContent = current_time;
    }
}

function typing() {
    let content = document.querySelector('#status1');
    content.textContent = "Typing...";
}

function online() {
    let content = document.querySelector('#status1');
    content.textContent = "Online";
}

function action1() {
    //      getting current time
    var today = new Date();
    var current_time = today.getHours() + ":" + today.getMinutes();

    let content = document.querySelector('#status');
    content.textContent = "Online";

    let cin = document.querySelector("#id2").value;
    if (cin != "") {
        document.querySelector("#id2").value = "";

        let parent = document.querySelector(".chat1");
        let parent1 = document.querySelector(".chat");

        //      create children
        let maindiv = document.createElement("div");
        let maindiv1 = document.createElement("div");
        let newdiv = document.createElement("div");
        let timechild = document.createElement("div");
        let newdiv1 = document.createElement("div");
        let timechild1 = document.createElement("div");

        //      assign children
        parent.appendChild(maindiv);
        maindiv.appendChild(newdiv);
        maindiv.appendChild(timechild);
        parent1.appendChild(maindiv1);
        maindiv1.appendChild(newdiv1);
        maindiv1.appendChild(timechild1);

        maindiv.style.display = "flex";
        maindiv.style.justifyContent = "flex-end";
        maindiv1.style.display = "flex";
        maindiv1.style.justifyContent = "flex-start";

        //      right window
        newdiv.style.backgroundColor = "green";
        newdiv.style.color = "white";
        newdiv.style.fontSize = "120%";
        newdiv.style.padding = "3px 3px 0 3px";
        newdiv.style.margin = "5px 0px 0px 50px";
        newdiv.textContent = cin;

        timechild.style.backgroundColor = "green";
        timechild.style.fontSize = "70%";
        timechild.style.color = "white";
        timechild.style.padding = "0 0 0 5px";
        timechild.style.margin = "5px 5px 0px 0px";

        timechild.textContent = current_time;

        //      left window
        newdiv1.style.backgroundColor = "darkslategray";
        newdiv1.style.color = "white";
        newdiv1.style.fontSize = "120%";
        newdiv1.style.padding = "3px 3px 0 3px";
        newdiv1.style.margin = "5px 0px 0px 5px";
        newdiv1.textContent = cin;

        timechild1.style.backgroundColor = "darkslategray";
        timechild1.style.fontSize = "70%"
        timechild1.style.color = "white";
        timechild.style.padding = "0 0 0 5px";
        timechild1.style.margin = "5px 50px 0px 0px";

        timechild1.textContent = current_time;
    }
}

function typing1() {
    let content = document.querySelector('#status');
    content.textContent = "Typing...";
}

function online1() {
    let content = document.querySelector('#status');
    content.textContent = "Online";
}