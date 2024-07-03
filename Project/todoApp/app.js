
const inputField=document.getElementById('input-field')

const addButton=document.getElementById('add-button')   

const cart_items=document.getElementById('cart-items')
//make firestore todo and add
const allData=[]

const search=document.getElementById('search')

const error=document.getElementById('error')

addButton.addEventListener('click',()=>{

    if(inputField.value===''){
        error.style.display='block'

        setTimeout(()=>{
            error.style.display='none'
        },1500)


        return
    }

    const db=firebase.firestore()
    const keyRef=db.collection('list')
    const key=keyRef.doc().id




    keyRef.doc(key).set({
        key:key,
        value:inputField.value
    })


    allData.push({key:key,value:inputField.value})
        inputField.value=''
    console.log(allData)
    addTodo()
}

   
)



const db=firebase.firestore()


 async function allvalues(){


 const waiting=await db.collection('list').get()
    waiting.forEach((item)=>{
        allData.push(item.data())
    })


console.log(allData)
addTodo()


}

allvalues()

function addTodo() {
    cart_items.innerHTML = '';
    for (let i = 0; i < allData.length; i++) {
        cart_items.innerHTML += `<div class="cart-item" draggable="true" ondragstart="drag(event)" id="item-${allData[i].key}">
            <div class='straight'>
                <p>${allData[i].value}</p>
                <button onclick="deleteItem('${allData[i].key}')">Delete</button>
                <button onclick="editItem('${allData[i].key}','${allData[i].value}')">Edit</button>
            </div>
        </div>`;
    }
    
    cart_items.addEventListener('dragover', allowDrop);
    cart_items.addEventListener('drop', drop);
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");

    const draggedElement = document.getElementById(data);
    const dropTarget = event.target.closest('.cart-item');
   

    if (dropTarget && dropTarget !== draggedElement) {
       
        cart_items.insertBefore(draggedElement, dropTarget);
    }
}


const deleteItem=(key)=>{
    const db=firebase.firestore()
    db.collection('list').doc(key).delete()
    allData.splice(allData.findIndex((item)=>item.key===key),1)
    cart_items.innerHTML=''
    addTodo()
}


const editItem=(key,value)=>{
    const db=firebase.firestore()
    const newValue=prompt('Enter new value',value)

    if(newValue==null)
    {
        return
    }


    db.collection('list').doc(key).update({
        value:newValue
    })
    allData[allData.findIndex((item)=>item.key===key)].value=newValue 
    cart_items.innerHTML=''
    addTodo()
    
}




search.addEventListener('keyup',(e)=>{
    const searchValue=e.target.value.toLowerCase()
    const filtered=allData.filter((item)=>item.value.toLowerCase().includes(searchValue))
    
    cart_items.innerHTML=''

    if(filtered.length===0)
    {
        cart_items.innerHTML=`<div class='notfound'>
        <p>No item found</p>
    </div>`
    }

    
    for(let i=0;i<filtered.length;i++)
    {
        cart_items.innerHTML+=`<div class="cart-item">
        
        <div class='straight'>
        <p>${filtered[i].value}</p>
        <button onclick="deleteItem('${filtered[i].key}')">Delete</button>
        <button onclick="editItem('${filtered[i].key}','${filtered[i].value}')">Edit</button>
        </div>
    </div>`
    }



})