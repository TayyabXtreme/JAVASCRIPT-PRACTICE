// var give=prompt("Enter any letter");
// if(give.charCodeAt(0)>=65 && give.toString().charCodeAt(0)<=90){
//     document.write(give+"<h1>It is upper case leter</h1>");
// }
// else if(give.charCodeAt(0)>=97 && give.toString().charCodeAt(0)<=122){
//     document.write(give+"<h1>It is lower case letter</h1>");
// }
// else{
//     document.write(give+"<h1>Its is note alphabetic character you give</h1>");
// }
var userName=prompt("Enter you name");
var total=+prompt("Enter your total Marks");
var Obtained=+prompt("Enter your Obtained Marks");
if(total>0  &&Obtained >0 &&total>=Obtained){
    var percentage=Obtained/total*100;
    if(percentage==100){
        var grade="1st";
    }
    else if(percentage>=90){
        var grade="A+";
    }
    else if(percentage>=80){
        var grade="A";
    }
    else if(percentage>=70){
        var grade="B+";
    }
    else if(percentage>=60){
        var grade="B";
    }
    else if(percentage>=50){
        var grade="C";
    }
    else if(percentage>=40){
        var grade="D";
    }
    else {
        var grage="Fail";
    }
    document.write(`
                <table border="2px" style="margin:auto; margin-top:250px; padding:10px; background:yellow; font-size:2em; font-weight:bold;">
                    <tr">
                        <td>Name</td>
                        <td>Total Marks</td>
                        <td>Obtained Marks</td>
                        <td>Percentage</td>
                        <td>Grade</td>
                    </tr>
                    <tr>
                        <td>${userName}</td>
                        <td>${total}</td>
                        <td>${Obtained}</td>
                        <td>${percentage}</td>
                        <td>${grade}</td>
                    </tr>


                </table>



`);
}
else if(total==0){
    document.write("You fail");
}
else{
    document.write("Enter your correct data");
}
