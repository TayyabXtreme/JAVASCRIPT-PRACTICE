var input=document.getElementById("data");
var arr;


console.log(data);
function validData(value){
for(var i=0;i<value.length;i++){
    if(value[i]==" "){
        return 0;
        break;
    }
    else{
        return 1;
    }
    
}
}
a=0;
var inpa
var  li
function add(){

    if(input.value.length>0 && validData(input.value) ){
    li=document.createElement("li");
    var btn1=document.createElement("button");
    var btn2=document.createElement("button");
    var image1=document.createElement("img");
    var image2=document.createElement("img");
    var data=document.createTextNode(input.value);
    var daba=document.createElement("div");
     inpa=document.createElement("input");
    image1.setAttribute("src","./assets/bin.png");
    image2.setAttribute("src","./assets/edit.png");
    console.log(li);
    // li.style.background="green";
    li.style.borderRadius="10px";
    li.style.width="90%";
    var hogaya=document.createElement("b");
    li.appendChild(inpa);
    inpa.style.display="none";
    hogaya.appendChild(data);
    li.appendChild(hogaya);
document.getElementById("store").appendChild(li)
    btn1.appendChild(image1);
    image1.style.width="30px";
    image1.style.height="30px";
    image2.style.width="30px";
    image2.style.height="30px";
document.getElementById("store").appendChild(btn1);
btn2.appendChild(image2);
document.getElementById("store").appendChild(btn2);
btn1.setAttribute("onclick","del(this)");
daba.appendChild(btn1);
daba.appendChild(btn2);

li.appendChild(daba);

btn2.setAttribute("onclick","editbtn(this)")
// li.appendChild(btn2);

input.value="";
    }
    else{
        alert("please enter correct data")
        input.value="";
    }
}

function del(e){
    e.parentNode.parentNode.style.width="95%";
    e.parentNode.parentNode.style.height="55px";
    e.parentNode.parentNode.style.background="rgba(250, 80, 80, 0.705)";
    e.parentNode.parentNode.style.border="1px solid red";
    e.parentNode.parentNode.style.color="#fff";
    setTimeout(() => {
        e.parentNode.parentNode.remove()
    }, 300);
   
}
function editbtn(e) {
    // console.log(e);
    // console.log(e.parentNode);
    // console.log(e.parentNode.parentNode);
    // console.log(e.parentNode.parentNode.parentNode);
  
    for(var i=1;i<=e.parentNode.parentNode.parentNode.childNodes.length-1;i++){
        console.log(e.parentNode.parentNode.parentNode.childNodes.length)
        e.parentNode.parentNode.parentNode.childNodes[i].childNodes[0].style.display="none";
        e.parentNode.parentNode.parentNode.childNodes[i].childNodes[1].style.display="inline";
        
        // e.parentNode.parentNode.parentNode.childNodes[i].childNodes[0].style.display="none";
        
    }
    e.parentNode.parentNode.childNodes[0].style.display="block";
    inpa.value= e.parentNode.parentNode.childNodes[1].innerText
     e.parentNode.parentNode.childNodes[1].style.display="none";
    
   
   
    // console.log(e.parentNode.parentNode.childNodes[0]);
    // e.parentNode.parentNode.style.background=" #4ec736a8";  
    // e.parentNode.parentNode.style.border="1px solid green";  
    
  
    
    //    var da=prompt("edit your todo", e.parentNode.parentNode.childNodes[0].innerText)
    
    // setTimeout(() => {
    //     e.parentNode.parentNode.style.background=" #68f74ba8";  
    // e.parentNode.parentNode.style.border="none";  
    // }, 300);
    
    
    // // var newData = prompt("enter value",inptext)
    
    //     e.parentNode.parentNode.childNodes[0].innerText=da;

    // var inpn=document.createElement("input");
    // e.parentNode.parentNode.childNodes[0].appendChild(inpn);
}


