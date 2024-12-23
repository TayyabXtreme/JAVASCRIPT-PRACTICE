// var arr=["ali","hamza","salman"];
// console.log(arr);
// var a=arr.push("sharuk","moiz");
// console.log(a);
// var b=arr.push("aahad");
// console.log(b);
// var c=arr.pop();
// console.log(c);
// var d=arr.unshift("abrar","hassan");
// console.log(d);
// var e=arr.shift();
// console.log(e);
// for(var a=1;a<=50;a++){
//     for(var b=2;b<a;b++){
       
//         if(a%b==0){
//             console.log(a);
             
//         }
//     }
   
// }
// console.log("hello");
var a=["india","pakistan","southafrica","newzealand"];
var d=["india","pakistan","southafrica","newzealand"];
var b=+prompt(`Enter which first team in fianl \n 1) ${a[0]} \n 2) ${a[1]} \n 3) ${a[2]} \n 4)${a[3]}`);
if(b<a.length){
   let c= a.splice(b-1,1);
   var d=+prompt(`Enter which second team in fianl \n 1) ${a[0]} \n 2) ${a[1]} \n 3) ${a[2]} `);
   if(d<c.length){
    e=c.splice(d-1,1);
    console.log(d[c]);
   }
} 