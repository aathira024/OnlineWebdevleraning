selectClassElements();
selectIdElement();
selectTagElement();
// selectElementBySelector(".cotainer");
selectElementBySelector("p");
createElement();
showListOfUsers();

function selectClassElements(){
    const element = document.getElementsByClassName("cotainer");
    for(i=0; i < element.length; i++){
        element[i].style.color = "blue";
    }

}
function selectIdElement(){
    const elements = document.getElementById("me");
    elements.style.color="red";
    elements.style.border="1px dotted blue";
}
function selectTagElement(){
    const elements=document.getElementsByTagName("h1");
    // elements.style.color = "green";
    console.log(elements[0]);
}
function selectElementBySelector(selector){
    const element = document.querySelector(selector);
    element.style.color= "red";
    console.log(element);
}
// function selectElementBySelector(){
//     const element = document.querySelector(selector);
//     console.log(element);
// }
// function selectElementBySelector(){
//     const element = document.querySelector(selector);
//     console.log(element);
// }
// var btn = document.getElementById("btn-login");
// btn.onclick = function(){
//     console.log('first click');
// }
// btn.onclick = function(){
//     console.log('second click');
// }
// btn.addEventListener("click", function(){
//     console.log('third click');
// })
// btn.addEventListener("click", function(){
//     console.log('fourth click');
// })
function selectElementBySelector(selector){
        const element = document.querySelector(selector);
     console.log(element);
     }
     function createElement(){
        const element = document.createElement("h3");
        const txt = document.createTextNode("Athira");
        element.appendChild(txt);
        const body = document.querySelector("body");
        body.appendChild(element);

     }
     function showListOfUsers(){
         const users = ["aathi","saru","ammu","kunju","manju"];
        const list = document.createElement("ul");
        for(let i=0; i < users.length; i++){
            const li = document.createElement("li");
            const txt = document.createTextNode(users[i]);
            li.appendChild(txt);
             list.appendChild(li)
     }
      list.style.listStyleType="none";
     const container = document.getElementById("list-of-users");
        container.appendChild(list);
      }
// function showListOfUsers(){
//     const users = ["ammu","ponnu","chinnu","kannu"];
//     const list = document.createElement("ul");
//     for(let i=0; i<users.length; i++){
//         const li = document.createElement("li");
//         const txt = document.createTextNodeusers(users[i]);
//         li.appendChild(txt);
//         list.appendChild(li);
//     }
//     const container = document.getElementById("list-of-users");
//     container.appendChild(list);
// }