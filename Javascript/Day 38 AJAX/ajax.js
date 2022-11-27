let countrylist =document.querySelector('.countrycont');


let request = new XMLHttpRequest(); /* 1. create XMLHttpRequest object    ,it will sote some
varible like anything(eg, request),and it will return object ITS STATE 1*/

request.open('GET','https://restcountries.com/v3.1/name/usa');
/* 2.  creating the requst,     and GET-is the
http method, and rest the url or path or end point  ITS STATE2 */

request.send();//send the request
request.addEventListener('load', function(){
   let [data] = JSON.parse(request.responseText);  //coverting JASON string to javascript object                                   
    console.log(data);//To idetify what response get from server for devplr

    /*add event to for loading while the data to fetch
with call back functn*/
const html = `
<div class="cardinfo">
<article>
  <img src="${data.flags.png}"/>
  <h3 class="title">${data.name.common}</h3>
  <h4 class="brand">${data.region}</h4>
  <h5 class="price">${data.population}</h5>
  <h5 class="price">${data.postalCode.format}</h5>
  <h5 class="price">${data.currencies.USD.name}</h5>
</article>
</div>
`
countrylist.insertAdjacentHTML('afterend',html);
});
