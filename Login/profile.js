let imageSet = document.getElementById("imageSet")

imageSet.addEventListener("change",(e)=>{
    console.log(e);
    console.log(e.target.files[0].name)
   uploadImage(e)
    
})

function uploadImage(e) {

    var storageRef = firebase.storage().ref();

    var uploadTask = storageRef.child(`users/${e.target.files[0].name}`).put(e.target.files[0]);

    // UPLOAD TASK 1 FUNCTION JO KIS LIYA 
    uploadTask.on('state_changed',
        (snapshot) => {

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;


            if (progress == 0) {
                Toastify({
                    text: "Image upload process start",
                    duration: 3000,
                    gravity: "top",
                    position: "right"

                }).showToast();
            }

            if (progress == 100) {
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
           
            uploadTask.snapshot.ref.getDownloadURL().then((data) => {

                console.log('File available at', data);

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
