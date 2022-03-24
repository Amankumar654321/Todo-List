document.querySelector("form").addEventListener("submit", tablebody);
function tablebody(){
    event.preventDefault();

var itemName = document.querySelector("#name").value;
var itemQty = document.querySelector("#qty").value;
var itemPrio = document.querySelector("#priority").value;


var tr = document.createElement("tr");


var td1 = document.createElement("td");
td1.innerText = itemName;
var td2 = document.createElement("td");
td2.innerText = itemQty;
var td3 = document.createElement("td");
td3.innerText = itemPrio;
tr.append(td1,td2,td3);
document.querySelector("tbody").append(tr);


}