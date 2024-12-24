var userName=document.getElementById("username");
var password=document.getElementById("password");
console.log(firebase.auth)
async function createAccount() {
    if(userName.value!="" && password.value!=""){
    console.log(userName.value)
    console.log(password.value)
    document.getElementById("sub").style.display="none";
    document.getElementById("loader").style.display="inline";
    document.getElementById("link").style.display="none";
    await firebase.auth().createUserWithEmailAndPassword(userName.value, password.value)
    .then((data) => {
         document.getElementById("sub").style.display="inline";
         document.getElementById("loader").style.display="none";
         document.getElementById("link").style.display="block";
     console.log(data)
     setTimeout(() => {
      alert("regintered successfully")
     }, 200);
     setTimeout(() => {
        window.location.href="Login.html";
       }, 2000);
        
  
      
    })
    .catch((error) => {
        document.getElementById("sub").style.display="inline";
        document.getElementById("loader").style.display="none";
        document.getElementById("error").style.display="block";
        document.getElementById("link").style.display="block";
        setTimeout(() => {
            document.getElementById("error").style.display="none";
        }, 3000);
      console.log(error)

      
    });


    userName.value="";
    password.value="";
    }
    else{
        alert("Please enter the Email or Password")
    }
}