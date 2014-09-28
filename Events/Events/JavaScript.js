function addItem() {
    var item = document.getElementById("task").value;

    var li = document.createElement("li");
    li.innerHTML = item;
    var delbutton = document.createElement('button');
    delbutton.className = "delbutton";
    delbutton.innerHTML = "Delete";
    delbutton.addEventListener(
    "click",
    function (ev) {
        ev.preventDefault();
        deleteItem(ev.target);
    }, false);
    li.appendChild(delbutton);
    document.getElementById("ul").appendChild(li);
}

function deleteItem(item) {
    item.parentNode.parentNode.removeChild(item.parentNode);
}

function hideItem() {
    document.getElementById("ul").style.display = "none";
}

function showItem() {
    document.getElementById("ul").style.display = "";
}
