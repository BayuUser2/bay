function getvisitor(){
var xhr = new XMLHttpRequest();
var url = 'https://api.countapi.xyz/hit/api-xfar05.herokuapp.com./visits';
xhr.onloadend = function(){
data = JSON.parse(this.responseText);
document.getElementById("visitor").textContent = data.value
 };
xhr.open("GET", url, true);
xhr.send();
}
