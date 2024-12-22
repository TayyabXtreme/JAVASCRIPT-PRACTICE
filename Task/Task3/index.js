for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        document.write("<span style='font-size:32px;color:red;font-weight:bold'>",j," ");
    }
    document.write("</span><br>");

}
// var arr=[1,2,11,3,2,45,33,5,6,78];
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length;j++){
//         var temp;
//         if(arr[i]<arr[j]){
//            temp=arr[i];
//            arr[i]=arr[j];
//            arr[j]=temp;
//         }
        
//     }
// }
// console.log(arr);
// var firstname=["BlueRay","upChuck","lojack"];
// var lastname=["zzz","Burp","Dogbone"];
// for(let i=0;i<firstname.length;i++){
//     // for(let j=0;j<lastname.length;j++){
//         console.log(firstname[i],"-",lastname[i]);
//     // }
// }
var a=[1,22,12,33,24,45,133];
var largest=a[0];
var store;
for(var i=0;i<a.length;i++){
    if(largest>a[i]){
        store=largest;
    }
    else{
        store=a[i];
    }
}
console.log(store);