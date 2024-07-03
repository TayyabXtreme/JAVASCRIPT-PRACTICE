// console.log('Hello World !')

// const input_item = document.getElementById('input_item')
// const addBtn = document.getElementById('addBtn')
// const list= document.getElementById('list')
// let items=[]
//  list.innerHTML=''
// addBtn.addEventListener('click', addItem)

// const Delete=(index)=>{
//     items.splice(index,1)
//     listPrint()

    
    
// }




// function addItem() {
    
//     let value=input_item.value

//     if(value=='' || value==null || value==undefined){
//         return 
//     }


//     items.push(value)

//     listPrint()
//     input_item.value=''
//     let itemInToString=JSON.stringify(items)
//     localStorage.setItem('todoList',itemInToString)


// }

// function listPrint(){
//      list.innerHTML=''
//     for(i=0;i<items.length;i++){
    
//         list.innerHTML+=`<div class="row">
//         <p>${items[i]}</p>
//         <button onClick='Delete(${i})'>Delete</button>
//         <button onClick='Edit(${i})' >Edit</button>
    
//         </div>`
//     }
// }




// // const addItem=function(){

// // }

// // const addItem=()=>{

// // }

// function Edit(index){
//     let newValue=prompt('Enter new value',items[index])
//     if(newValue=='' || newValue==null || newValue==undefined){
//         return 
//     }


//     items.splice(index,1,newValue)
//     listPrint()

// }




// function Main(){
//     let itemIntoArray=localStorage.getItem('todoList')
//     console.log(itemIntoArray)

    

// }

// Main()




const input_item = document.getElementById('input_item')
const addBtn = document.getElementById('addBtn')
let items=[]
const list= document.getElementById('list')
const input_search=document.getElementById('input_search')

addBtn.addEventListener('click',addItem)


function addItem(){
   let value=input_item.value

   if(value=='' || value==null || value==undefined){
    return 
   }

   items.push(value)

   printAllItems()
   input_item.value=''

   let stringItems=JSON.stringify(items)
   localStorage.setItem('todoList',stringItems)


   
}


function printAllItems(){
    list.innerHTML=''
    for(let i=0;i<items.length;i++){

        list.innerHTML+=`
        <div class="row">
            <p>${items[i]}</p>
            <button onClick='Delete(${i})'>Delete</button>
            <button onClick='Edit(${i})'>Edit</button>

        </div>
        
        `
        
    }
}






function Delete(index){
   
    items.splice(index,1) 
    let stringItems=JSON.stringify(items)
    localStorage.setItem('todoList',JSON.stringify(stringItems))
    printAllItems()

}

function Edit(index){
    let newValue=prompt('Enter the updated value',items[index])
    if(newValue=='' || newValue==null || newValue==undefined){
        return 
    }
    items.splice(index,1,newValue)
    let stringItems=JSON.stringify(items)
    localStorage.setItem('todoList',JSON.stringify(stringItems))
    printAllItems()


}

function Main(){

    let stringToArray=JSON.parse(localStorage.getItem('todoList'))
    items=stringToArray
    printAllItems()

}

Main()

input_search.addEventListener('keyup',searchItem)


function searchItem(){

    let searchValue=input_search.value
    let filterItem=items.filter(function(item){
        return item.includes(searchValue)
    })

    if(searchValue==''){
        printAllItems()
        return 
        
    }

    list.innerHTML=''
    for(let i=0;i<filterItem.length;i++){
        list.innerHTML+=`
        <div class="row">
            <p>${filterItem[i]}</p>
            <button onClick='Delete(${i})'>Delete</button>
            <button onClick='Edit(${i})'>Edit</button>

        </div>
        
        `
    }


}
