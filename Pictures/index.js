// var obj = {
//     email:"new@gmail.com",
//     contact_no: +92330303030,
//     "name":"obj",
//     "name":"smit",
//     age:20
// }

// console.log(obj)
// console.log(obj.email)
// obj.age=34
// obj["contact_no"]=1234345

// console.log(obj)

// var getData  = localStorage.getItem("maindata")
// console.log(getData)
// console.log(JSON.parse(getData))

// var mainObj = JSON.parse(getData)


// // console.log(mainObj[0].name)
// // console.log(mainObj[0]["name"])
// // console.log(mainObj[2][0])

// {}
// []
// {}

// // of ,in

// let maindata = document.getElementById("maindata")
// for(var i of mainObj){
//     console.log(i)
//     let div = document.createElement("div")
//     div.setAttribute("class","col col-lg-4 col-md-6 col-sm-6 col-12 mt-5 ")
    

//     let card = document.createElement("div")
//     card.classList = "card"

//     let image = document.createElement("img")
//     image.src=i.image

//     let cardBody = document.createElement("div")
//     cardBody.setAttribute("class","card-body")

//     let hdata = document.createElement("h5")
//     hdata.setAttribute("class","card-title")

//     var htext = document.createTextNode(i.name)
//     hdata.appendChild(htext)

//     var cdata = document.createElement("p")
//     cdata.innerText = i.contactno

//     cardBody.appendChild(hdata)
//     cardBody.appendChild(cdata)

//     card.appendChild(image)
//     card.appendChild(cardBody)

//     div.appendChild(card)
//     console.log(div)
//     console.log(maindata)
//     maindata.appendChild(div)


// }

// var getData=localStorage.getItem("datas")
// console.log(getData)
var username = document.getElementById("name")
 var contact = document.getElementById("contact")
 var imagelink = document.getElementById("imagelink")
// var mainObj=JSON.parse(getData);
// var maindata=document.getElementById("maindata");
// // var mainObj=[];
// for(var i of mainObj){
//        maindata.innerHTML+=`<div class="col col-lg-4 mt-5 " >
//        <div class="card">
//            <img src=${i.image}>
//            <div class="card-body">
//              <h5 class="card-title">${i.name}</h5>
//              <p class="card-text">${i.contact}</p>
//              <a href="#" class="btn btn-primary">Go somewhere</a>
//            </div>
//          </div>
//    </div>`
    
//     }
function submitData(){
   
    console.log(username.value)
    console.log(contact.value)
    console.log(imagelink.value)

    let div = document.createElement("div")
    div.setAttribute("class","col col-lg-4 col-md-6 col-sm-6 col-12 mt-5 ")
    

    let card = document.createElement("div")
    card.classList = "card"

    let image = document.createElement("img")
    image.src=imagelink.value

    let cardBody = document.createElement("div")
    cardBody.setAttribute("class","card-body")

    let hdata = document.createElement("h5")
    hdata.setAttribute("class","card-title")

    var htext = document.createTextNode(username.value)
    hdata.appendChild(htext)

    var cdata = document.createElement("p")
    cdata.innerText = contact.value

    cardBody.appendChild(hdata)
    cardBody.appendChild(cdata)

    card.appendChild(image)
    card.appendChild(cardBody)

    div.appendChild(card)
    console.log(div)
    console.log(maindata)
    maindata.appendChild(div)

    mainObj.push({
       name: username.value, 
       contactno:contact.value,
       image:imagelink.value,
    })
    localStorage.setItem("data",JSON.stringify(mainObj))

}

//id=>


// 