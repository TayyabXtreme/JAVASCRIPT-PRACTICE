var oldYear=+prompt("Enter the date which you back");
var date=new Date();
var setDiffYear=date.getFullYear()-oldYear;
console.log(setDiffYear);
var year=setDiffYear.toString();
var cMonth=new Date().toString().slice(4,7);
console.log(cMonth);
var day=new Date().toString().slice(8,10);
console.log(day);
console.log(day+" "+cMonth+" "+year)
console.log(new Date(day+" "+cMonth+" "+year).toString().slice(0,4));