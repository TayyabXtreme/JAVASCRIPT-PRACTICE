let email = document.getElementById("email")
let password = document.getElementById("password")
let loading = document.getElementById("loading")
let btn = document.getElementById("btn")
let imageSet = document.getElementById("imageSet")
var username = document.getElementById("Name")
console.log(firebase.database)

var imageUrl = ""

// var porgresstest = document.getElementById("progress")

//CREATE ACCOUNT
async function createAccount() {
    
     if(email.value =="" || password.value=="" || name.value==""){
        Toastify({
            text: "Plz select all input ",
            duration: 3000,
            gravity: "top",
            position: "right"

        }).showToast();

    }

    else if(imageUrl==""){
        Toastify({
            text: "Plz selet image",
            duration: 3000,
            gravity: "top",
            position: "right"

        }).showToast();


    }

    else{
        console.log(email.value)
        console.log(password.value)
        loading.style.display = "inline"
        btn.style.display = "none"
    
        await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(async (data) => {
                console.log(data)
                var userData = data.user
               
    
                var dbRef = firebase.database().ref("users")
    
                // object
                var userObj = {
                    username:username.value,
                    email:email.value,
                    password:password.value,
                    userimage : imageUrl,
                    useruid:userData.uid
                }
    
                // set=>is ma id ham khud data 
                // push=>new key 
    
                await dbRef.child(userData.uid).set(userObj)
                Toastify({
                    text: "user create account ",
                    duration: 3000,
                    gravity: "top",
                    position: "right"
    
                }).showToast();
    
                loading.style.display = "none"
                btn.style.display = "inline"
                email.value = ""
                password.value = ""
                imageUrl = ""
                name.value=""
                window.location.href = "./login.html"
                // alert("user regsister ")
            })
            .catch((err) => {
                alert(err.code)
                console.log(err.code)
                loading.style.display = "none"
                btn.style.display = "inline"
            })

    }

   
}

//LOGIN FUNCTION
async function signin() {
    var dbRef = firebase.database().ref("users")
    console.log(email.value)
    console.log(password.value)
    loading.style.display = "inline"
    btn.style.display = "none"
    await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(async (data) => {
            console.log(data.user)
            
          await  dbRef.child(data.user.uid).get()
          .then((snapshot) => {
            console.log(snapshot.val()["userimage"])

          })
            loading.style.display = "none"
            btn.style.display = "inline"
            email.value = ""
            password.value = ""
            imageUrl = ""
            name.value=""
            // alert("user regsister ")
        })
        .catch((err) => {
            alert(err.code)
            console.log(err.code)
            loading.style.display = "none"
            btn.style.display = "inline"
        })
}


// filter
// sort

// 1,2,12,24,0,9,1
// 0,1,1,12,2,24,9

imageSet.addEventListener("change", (e) => {
    console.log(e.target.files[0].size)
    var checkExt = e.target.files[0].name.toString().split(".")
    if(checkExt[1].toString().toLowerCase()=="jpg"|| checkExt[1].toString().toLowerCase()=="png"
    ||
    checkExt[1].toString().toLowerCase()=="jfif"
    ){
        uploadImage(e)
    }
    else{
        Toastify({
            text: "Plz selet image",
            duration: 3000,
            gravity: "top",
            position: "right"

        }).showToast();
    }
    // console.log(e.target.files[0].name)
    // uploadImage(e)

})

// imageuplaod function

function uploadImage(e) {

    var storageRef = firebase.storage().ref();



    var uploadTask = storageRef.child(`users/${e.target.files[0].name}`).put(e.target.files[0]);

    // UPLOAD TASK 1 FUNCTION JO KIS LIYA 
    uploadTask.on('state_changed',
        (snapshot) => {

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;


            if (progress == 0) {
                btn.disabled =true
                Toastify({
                    text: "Image upload process start",
                    duration: 3000,
                    gravity: "top",
                    position: "right"

                }).showToast();
            }

            if (progress == 100) {
                btn.disabled =false
                Toastify({
                    text: "Image upload process done",
                    duration: 3000,
                    gravity: "top",
                    position: "right"

                }).showToast();
            }
            // switch (snapshot.state) {
            //     case firebase.storage.TaskState.PAUSED: // or 'paused'
            //         console.log('Upload is paused');
            //         break;
            //     case firebase.storage.TaskState.RUNNING: // or 'running'
            //         console.log('Upload is running');
            //         break;
            // }
        },
        (error) => {
            // Handle unsuccessful uploads
        },
        () => {
           
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                imageUrl=url
                console.log('File available at', url);

            });
        }
    );
}









// storagePath.put(e.target.files[0]).then((snapshot) => {
//     // alert('Uploaded a blob or file!');
//     Toastify({
//         text: "UPLOAD USER IMAGE",
//         duration: 3000,
//         gravity:"bottom",
//         position:"left"

//         }).showToast();
//   });



// store
// user =>data store
// database

