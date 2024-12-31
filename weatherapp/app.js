let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
const Tday=document.getElementById("Tday");
const key='9266eb711803a1bf968be2b51370f537'
function getTime(){
    let date=new Date();
    let hour=date.getMonth();
    let todayDate=date.getDate();

    
    console.log(month[hour]);

    let newDate=todayDate.toString();
    if(todayDate<10){
        newDate='0'+todayDate;
    }
    


    Tday.innerHTML=`Today ,${newDate} ${month[hour]}`;
}

getTime()


getWeatherData=async()=>{
    let lat='25.39242';
    let lon='68.37366';

    let api=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    let data=await api.json();
    console.log(data);
}

getWeatherData();