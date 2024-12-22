function submit(){
    if(document.querySelector("#name").value.length==0 || document.querySelector("#password").value==""){
        if(document.querySelector("#name").value=="" ){
        document.querySelector("#error1").style.display="inline";
        document.querySelector("#name").style.border="1px solid red";
    }
        else{
        document.querySelector("#error1").style.display="none";
        document.querySelector("#name").style.border="1px solid black";
    }
        if(document.querySelector("#password").value==""){
       
        document.querySelector("#error2").style.display="inline";
       
        document.querySelector("#password").style.border="1px solid red";
    }
        else{
        document.querySelector("#error2").style.display="none";
        document.querySelector("#password").style.border="1px solid black";
    }
}
    else{
        
        document.querySelector("#name").value="";
        document.querySelector("#password").value="";
        document.querySelector("#error2").style.display="none";
        document.querySelector("#password").style.border="1px solid black";
        document.querySelector("#error1").style.display="none";
        document.querySelector("#name").style.border="1px solid black";
        var time=new Date().getSeconds() ; 
        while(time < time+3){
        ++time;
        console.log(time);
        document.querySelector("h4").style.display="inline";
        }
    document.querySelector("h4").style.display="none";
    
    }}