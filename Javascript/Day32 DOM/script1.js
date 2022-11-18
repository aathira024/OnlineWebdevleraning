selectClassElements();
selectIdElement();
selectTagElement();
selectElementBySelector(".container");
selectElementBySelector(".container");
selectElementBySelector("#ID");
createElement();
showListOfUsers();
//removeHeading();
getClassName();
getClassList();


function selectClassElements()
{
    const elements = document.getElementsByClassName("container");
    for(let i = 0; i < elements.length; i++)
    {
     elements[i].style.color = "blue";
    }

}
function selectIdElement(){
    const elements = document.getElementById("ID");
    elements.style.color = "pink";
    elements.style.border = "2px solid blue";
}
function selectTagElement(){
    const elements = document.getElementsByTagName("h1");
    console.log(elements[0]);
   

}
function selectElementBySelector(selector){
    const element = document.querySelector(selector);
    console.log(element);
}
function selectElementBySelector(selector){
    const elements = document.querySelectorAll(selector);
    console.log(elements);
}
function selectElementBySelector(selector){
    const element = document.querySelector(selector);
    console.log(element);
}
function createElement(){
    const element = document.createElement("h3");
    const txt = document.createTextNode("Athira Saravananan");
    element.appendChild(txt);
    const body = document.querySelector("body");
    body.appendChild(element);

}
function showListOfUsers(){
    const users = ["atahira","auannau","ahfjhv","ajjhf","fbsnc"];
    const list = document.createElement("ul");
    for( let i = 0; i < users.length; i++){
        const li = document.createElement("li");
        const txt = document.createTextNode(users[i]);
        li.appendChild(txt);
        list.appendChild(li);
    }
    list.style.listStyleType = "none";
    const container = document.getElementById("list-of-users");
    container.appendChild(list);

}
function removeHeading(){
    const heading = document.querySelector("h1");
    heading.remove();
}
function getClassName(){
    const element = document.querySelector(".container");
    element.className = "box";
}
function getClassList() {
    const element = document.querySelector(".container");
    element.classList.add("box");
    element.classList.remove("big");
    element.classList.replace("big", "small");
    element.classList.toggle("show");
    const isBox = element.classList.contains("box");
  }