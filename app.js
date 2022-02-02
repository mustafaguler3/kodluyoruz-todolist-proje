var btn = document.querySelector(".btn");
var input = document.querySelector("#todo");
var ul = document.querySelector("ul");
var cardBody = document.querySelector(".card-body");

eventListeners();

function eventListeners(){
    btn.addEventListener("click",addItem);
    cardBody.addEventListener("click",removeItem);
}

function removeItem(e){

    if(e.target.className === "fas fa-times d-flex justify-content-end"){
        e.target.parentElement.parentElement.remove();
        console.log("cl")
    }


}



function addItem(){

    var li = document.createElement("li");
    var link = document.createElement("a");
    var val = input.value;
    ul.classList.add("list-group");
    li.classList.add("list-group-item");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fas fa-times d-flex justify-content-end'></i>"
    li.appendChild(link);
    li.appendChild(document.createTextNode(val));    
    ul.appendChild(li);

    val.value = "";
}