localStorage.setItem("athira",27);
sessionStorage.setItem("saravana",27);
let user = {
    name:"ammu",
    age :28
};
localStorage.setItem("user",JSON.stringify(user));
const name = localStorage.getItem("name");
console.log(name);
const userde=JSON.parse(localStorage.getItem("user"));
console.log(userde);

localStorage.removeItem("name");
localStorage.removeItem("city");

//we can use it insted of for loop insalisation
for (let key in obj) {
    console.log(obj[key]);
  }
  
  let arr = [1, 2, 3, 4];
  
  for (let i of arr) {
    console.log(i);
  }
  for (let i = 0; i < arr.length; i++) {}
  