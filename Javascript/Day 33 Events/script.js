/*Event Handler ->  the event handler is an attribute which helps 
   to handle the events that happpens in the DOM*/
//Onclick
//Onchange
//oninput

//onmouseover
//onmouseout
//onfocus
//onblur

//Key events-->
//onkeydown
//onkeyup
//EventListner--> Its method to create/remove event handler for elements
document.getElementById("chklistne").addEventListener("click",chklistnr);
// document.getElementById("chklistne").removeEventListener("click",chklistnr);
function chklistnr(){
    //   alert("hello");
      document.getElementById("chklistne").style.background="red";
      document.getElementById("chklistne").style.color="blue";
}
function checkButtonclick(){
    alert("Hi i am button");
   
}
function btnclick(){
    console.log('the button clicked');
    alert('hello');
}
function selectvalues(){
    var gender = document.getElementById("select").value;
    console.log(gender);
}
function keyDown(event){ //event-->its an default parameter in js which allows the key information
    console.log(event.key);
    document.getElementById("keycheck").style.background= "red";
    document.getElementById("keycheck").style.color= "white";
}

function keyUp(event){
    console.log(event);// event-we can access diffferent parameters of element like,key,code,input,alt ket tec
    event.pre
    document.getElementById("keycheck").style.background= "blue";
    document.getElementById("keycheck").style.color= "yellow";
}
function mouseOver(){
    document.getElementById("mousecheck").style.color= "red";
}
function mouseOut(){
  
    document.getElementById("mousecheck").style.color= "blue";
}
function focusckk(){
    document.getElementById("focuscheck").style.border= "1px solid red";
}
function blurchitk(){
    document.getElementById("focuscheck").style.border= "1px solid blue";
}
function chksubmit(){
    alert("the form submitted");
    // document.getElementById("fosub").style.background= "green";
}
document.getElementById("clickme").addEventListener("click", function (event){
    event.preventDefault();
    alert("prvention")
});
