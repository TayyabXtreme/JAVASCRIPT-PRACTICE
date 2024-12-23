var a;

const laylo=()=>{
    var b="null";
a=document.querySelector("input").value;
console.log(a);
if(a==""){
    document.querySelector("input").style.border="3px solid black";
    document.querySelector("h5").style.display="block";
}
else{
    document.querySelector("input").style.border="1px solid black";
    document.querySelector("h4").style.display=b;
}


}