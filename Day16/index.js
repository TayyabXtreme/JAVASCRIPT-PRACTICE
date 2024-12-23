let div=document.getElementsByTagName("div");
// console.log(div[0].innerText);
console.log(div[0].innerHTML);
function inners(){
    document.getElementById("daba").innerHTML=div[0].innerText;
} 
function html(){
    document.getElementById("daba").innerHTML=div[0].innerHTML;
} 