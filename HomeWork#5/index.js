// 1.  Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.  
//  2. Repeat task1 for subtraction,
//  multiplication, division & 
// modulus. 
// var num1=+prompt("Enter the value 1");


// if(num1>=0&&num1<=9){
//     console.log(num1.toString().charCodeAt(0));
//     var num2=+prompt("Enter the value 2");
//     if(num2>=0&&num2<=9){
//         var op=prompt("Enter the operation");
//     if(op=='+'){
//         document.write("a+b is "+(num1+num2));
//     }
//     else if(op=='-'){
//         document.write("a-b is "+(num1-num2));
//     }
//     else if(op=='*'){
//         document.write("a*b is "+(num1*num2));
//     }
//     else if(op=='/'){
//         document.write("a/b is "+(num1/num2));
//     }
//     else if(op=='%'){
//         document.write("a%b is "+(num1%num2));
//     }
//     else{
//         document.write("Enter correct operator");
//     }
// }
// else{
//     document.write("Enter value 0 to 9");
// }
// }
// else{
//     document.write("Enter value 0 to 9");
// }

// if(num1.toString().charCodeAt(0) >= 48 && num1.toString().charCodeAt(0) <= 57){
//     var num2=+prompt("Enter the value 2");
//     if(num2.toString().charCodeAt(0) >= 48 && num2.toString().charCodeAt(0) <= 57){
//         var op=prompt("Enter the operation");
//     if(op=='+'){
//         document.write("a+b is "+(num1+num2));
//     }
//     else if(op=='-'){
//         document.write("a-b is "+(num1-num2));
//     }
//     else if(op=='*'){
//         document.write("a*b is "+(num1*num2));
//     }
//     else if(op=='/'){
//         document.write("a/b is "+(num1/num2));
//     }
//     else if(op=='%'){
//         document.write("a%b is "+(num1%num2));
//     }
//     else{
//         document.write("Enter correct operator");
//     }
// }
// else{
//     document.write("Enter value 0 to 9");
// }
// }
// else{
//     document.write("Enter value 0 to 9");
// }




// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 


// var num=+prompt("Enter the number");
// document.write("Initial value is "+num+"<br>");
// document.write("Increment is "+(++num)+"<br>");
// document.write("Addition of 5 is "+(num+5)+"<br>");
// document.write("Decreament is "+(--num)+"<br>");
// document.write("Remainder is " +num%2);


// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:

// var ticket=600;
// var money=+prompt("How many ticket you want to buy\n\nOne ticket is equal to 600");
// document.write("Total cost to buy "+money+" ticket to a movie is "+money*ticket+" PKR");

// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

// var table=+prompt("Enter the table of you want ",4);
// document.write("Table of"+table+"<br>");
// for(var a=1;a<=10;a++){
//     document.write(table+" X "+a+" = "+a*table+"<br>");
// }


// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
//  a.  Store a Celsius temperature into a variable.
//  b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
//  c.  Now store a Fahrenheit temperature into a variable. 
//  d. Convert it to Celsius & output “NNoF is NNoC”.

// var celcius=25;
// document.write(celcius+" C is "+((celcius*9/5)+32)+"F");
// document.write("<br> <br> 70F is "+(((70-32)*5)/9)+"C");
function factFinder(a){
var num=a;
var factorial=1;
for(num;num>=1;num--){
factorial*=num;
}
document.write(`<h1>${factorial}</h1>`);
}
factFinder(6);  
factFinder(0);  
