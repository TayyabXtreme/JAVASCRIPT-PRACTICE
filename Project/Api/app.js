const search=document.getElementById('search');
const searchBtn=document.getElementById('searchBtn');
let img=document.getElementById('img');
let user=document.getElementById('user');
let user_bio=document.getElementById('user-bio');
let imageUrl=''
let userName=''
let bio=''


searchBtn.addEventListener('click',async()=>{

    if(search.value==''){
        
        return
    }
    const apiOfUserGithub=await fetch(`https://api.github.com/users/${search.value}`);

    const data=await apiOfUserGithub.json();


    bio=data['bio']
    imageUrl=data['avatar_url']
    userName=data['name']

    img.src=imageUrl
    user.innerHTML=userName
    user_bio.innerHTML=bio

 
    search.value=''
})