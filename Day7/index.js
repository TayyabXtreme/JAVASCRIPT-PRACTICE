var education = ["SSC","HSC","Bsc","BS","BE","msc","PHD"];
document.write("<div style='border:2px solid blue ;padding:10px;font-size:25px'>")
document.write("<h1 style='text-align:center ; color:red'>Student Data<br></h1>");
document.write("<ol>")
education.forEach(elem => {document.write('<li>',elem,'</li>',"<br>");});
document.write("</ol>")
document.write("</div>");

// document.write("eren yeager","levi","L","Light yagami","gojo","goku","zanaitsu","pikachu");
var mobile=new Array("Apple","samsung","oppo","vivo","techno","infinix","nokia");
document.write(`
<select style="font-size:32px;margin:10px"=>
<option>${mobile[0]}</option>
<option>${mobile[1]}</option>
<option>${mobile[2]}</option>
<option>${mobile[3]}</option>
<option>${mobile[4]}</option>
<option>${mobile[5]}</option>
<option>${mobile[6]}</option>


</select>


`)
// var number=[100,2,3,10,"ali","Ali",17,34,77,"@","!"];
// console.log(number.sort());

//smit new cources
// var city=["karachi","hyderabad","islambad","faislabad","peshawar"];
// var selectedCities =city.slice();
// console.log(selectedCities);