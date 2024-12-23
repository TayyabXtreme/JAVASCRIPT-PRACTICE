var apiData=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo praesentium at a, molestias ullam accusamus fuga nisi sapiente. Sint, laborum? Ad, beatae tenetur maxime enim adipisci exercitationem architecto repudiandae magnam neque repellat natus est voluptatibus aliquid, incidunt nesciunt similique, ratione optio illo. Magnam dolorum unde possimus aut asperiores? Quod accusamus eius, reprehenderit maxime incidunt ducimus perferendis doloribus labore. Autem rerum, minima numquam nisi perferendis illo. Debitis quisquam velit ab perspiciatis sint cupiditate, labore aliquam temporibus ad accusantium incidunt ea soluta enim consectetur esse! Laborum exercitationem nisi necessitatibus fugiat vero. Vero, culpa nesciunt voluptas, nam itaque nemo est consectetur ducimus numquam expedita tempora eveniet laboriosam, id repellendus commodi at dolore? Molestiae debitis fuga ipsam totam id necessitatibus magni tempore quaerat sapiente provident alias enim eligendi quos accusantium rem veritatis laudantium aut expedita illo, eius deserunt, libero ex! Odit, atque quibusdam! Quasi ratione laborum aspernatur dolorem optio dicta in, repellat quos nam harum corrupti non accusantium totam modi necessitatibus praesentium provident quibusdam quisquam, aliquid consequatur cum. Laborum assumenda voluptates ad illum, error quaerat nam, dolor dicta nisi rerum magni natus. Fuga delectus nobis aliquam, laudantium impedit provident fugiat error nihil ut iste rem voluptatem doloribus, optio incidunt magnam aspernatur. Non, excepturi. Modi, ipsam similique doloribus non et placeat molestias cumque repellendus excepturi repudiandae, maxime unde? Beatae ipsam nemo totam fuga quos c `;
var paragraph=document.getElementById("para");
var a=0;
function ShowLess(){
    paragraph.innerHTML=apiData.substring(0,300)+"<button onClick=ShowText(false)> ReadMore </button>";
    console.log(paragraph.innerText.length);
}
function ShowText(check){

    if(paragraph.innerText.length==0 && check==false){
        a+=300;
    paragraph.innerHTML=apiData.substring(0,300)+"..."+"<button onClick=ShowText(false)> ReadMore </button>";
    console.log("the length of paragraph is now :"+paragraph.innerText.length);
    document.getElementById("btn").style.display="none";
    }
    else if(paragraph.innerText.length>=300 && check==false && a<=apiData.length){
        a+=300;
        paragraph.innerHTML=apiData.substring(0,a)+"..."+"<button onClick=ShowText(false)> ReadMore </button>";
        console.log("the length of paragraph is now :"+paragraph.innerText.length);
    }
    else{
        a+=300
        paragraph.innerHTML=apiData.substring(0,a)+"<button onClick=ShowLess()> ShowLess </button>";
        console.log("the length of paragraph is now :"+paragraph.innerText.length);
        a=0;
    }
}
