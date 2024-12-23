const box=document.getElementById("box");
let data=[
    {
        userName:"AbdulMoiz",
        center:"Smit",
        course:"React",
        time:"Gabhrana nahi hai",
        img:"https://th.bing.com/th/id/R.7ec8b64fb7bf2eb1cbc27704a1de0559?rik=SvZJGfTX8cU9cA&pid=ImgRaw&r=0"
    },
    {
        userName:"Ali",
        center:"Smit",
        course:"JS",
        time:"Food Web Sa dar kay bhagaya",
        img:"https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg?size=626&ext=jpg&ga=GA1.1.1649871356.1698571669&semt=ais"
    },
    {
        userName:"Tayyab",
        center:"Muet",
        course:"AI",
        time:"Abhi Quantum Technology bhi dekhni hai",
        img:"https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.1649871356.1698571669&semt=ais"
    },
    {
        userName:"Kashan Memon",
        center:"Smit",
        course:"Html",
        time:"Time nahi hai smjhnay ka",
        img:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.1649871356.1698571669&semt=ais"
    }
];

data.map((v,i)=>{
    box.innerHTML+=`
    <div class="card">
    <img src="${v.img}" alt="Avatar" style="width:100%">
    <div class="container">
      <h4 style="font-weight:100">Name: <b>${v.userName}</b></h4> 
      <p> Center : ${v.center}</p> 
      <p> Course : ${v.course}</p> 
      <p> About  :<span>${v.time}</span></p>
`}
);





