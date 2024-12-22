
document.querySelector('button').addEventListener('click',()=>{
    let money=+prompt("enter the money");
    let fiveThousandRupee=Math.floor(money/5000);
    document.querySelector('#five').innerHTML=`You get "${fiveThousandRupee}" PKR of 5000` ;
    let oneThousandRupee=Math.floor((money%5000)/1000);
    document.querySelector('#one').innerHTML=`You get "${oneThousandRupee}" PKR of 1000` ;
    let fiveHunderedReupee=Math.floor(((money%5000)%1000)/500);
    document.querySelector('#fhun').innerHTML=`You get "${fiveHunderedReupee}" PKR of 500` ;
    let HunderedReupee=Math.floor((((money%5000)%1000)%500)/100);
    document.querySelector('#hund').innerHTML=`You get "${HunderedReupee}" PKR of 100` ;
    let chilar=(((money%5000)%1000)%500)%100;
    document.querySelector('#chilar').innerHTML=`You chillar is "${chilar}" PKR` ;
});

