const card=document.getElementById('card')


async function Main(){

    const api=await fetch('http://universities.hipolabs.com/search?country=pakistan')

    const data=await api.json()

    console.log(data)
    card.innerHTML=``

    for(let i=0;i<data.length;i++){

       

        card.innerHTML+=`


        <div class="card-body" style="height: 200px;" >
        <h6 style="text-align: center;font-size: 1em;" class="card-subtitle mb-2 text-body-secondary">${data[i]['name']}</h6>
         <p style="text-align: center;" class="card-text">${data[i]['state-province']}</p>
        <a href=${data[i]['web_pages']} target='_blank'>
                       <p style="text-align: center;" class="card-text">${data[i]['web_pages']}</p>
        </div>`
    
        }

    // for(let i=0;i<10;i){

    //     card.innerHTML+=`
    
    // <div class="card-body" style="height: 200px;" >
                 
                  
            
                  
               
    //     <h6 style="text-align: center;font-size: 1em;" class="card-subtitle mb-2 text-body-secondary">${data[i]['name']}</h6>
    //                   <p style="text-align: center;" class="card-text">${data[i]['state-province']}</p>
    //                   <a href=${data[i]['web_pages']} target='_blank'>
    //                   <p style="text-align: center;" class="card-text">${data[i]['web_pages']}</p>
        
        
    //      </div>
        
        
    //     `

    // }


   


}

Main()



const search=document.getElementById('search')

search.addEventListener('keyup',async()=>{


    const api=await fetch('http://universities.hipolabs.com/search?country=pakistan')

    const data=await api.json()
    card.innerHTML=``
for(let i=0;i<data.length;i++){
   
   if(data[i]['name'].toLowerCase().includes(search.value.toLowerCase())){

    console.log(i)
    card.innerHTML+=`
    <div class="card-body" style="height: 200px;" >
        <h6 style="text-align: center;font-size: 1em;" class="card-subtitle mb-2 text-body-secondary">${data[i]['name']}</h6>
         <p style="text-align: center;" class="card-text">${data[i]['state-province']}</p>
        <a href=${data[i]['web_pages']} target='_blank'>
                       <p style="text-align: center;" class="card-text">${data[i]['web_pages']}</p>
        </div>`
    
        }
    




}})