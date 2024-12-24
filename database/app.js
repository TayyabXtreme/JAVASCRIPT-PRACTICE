var userName=document.getElementById('user');
var password=document.getElementById('password');

console.log(firebase)
function signIn() {
    console.log(userName.value);
    console.log(password.value);
    async function createAccount() {
        if(userName.value!="" && password.value!=""){
        
        await firebase.auth().signInWithEmailAndPassword(userName.value, password.value)
        .then((data) => {
            
         console.log(data)
         setTimeout(() => {
          alert("signIn successfully")
         }, 200);
        //  setTimeout(() => {
        //     // window.location.href="profile.html";
        //    }, 3000);
            
      
          
        })
        .catch((error) => {
            
            setTimeout(() => {
                
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

}