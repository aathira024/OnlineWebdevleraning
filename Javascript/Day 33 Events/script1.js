//onclick
//onchange
//onmouseover
//onmouseout
//oninput

//onkeyup
//onkeydown
//onfocus
//onblur
document.getElementById("lisner").addEventListener("click",evenchk);
function evenchk(){
    // alert("event lister");
    document.getElementById("lisner").style.background= "red";
}
function clikon(){
    alert("its clicked")
    
}
function keyu(event){
    console.log(event)
    document.getElementById("keyyfun").style.background="red";
}
function keyd(event){
    console.log(event.key)
    document.getElementById("keyyfun").style.background= "yellow";
}
function mouseov(){
document.getElementById("mouseeve").style.color="blue";
}
function mouseou(){
    document.getElementById("mouseeve").style.color="brown";
}
function slectval(){
    var gender= document.getElementById("gense").value;
    console.log(gender);
}
function thfocus(){
    document.getElementById("fceid").style.color="green";
}
function bluth(){
    document.getElementById("fceid").style.color="blue";

}
function frmsun(){
    alert("form submitted");
}