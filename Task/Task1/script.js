var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
var c = +prompt("Enter third number");
if (a == b && a > c) {
    document.write("First and second number is equal and third number is small");
}
else if (a == c && a > b) {
    document.write("First and third number is equal and second number is small");
}
else if (c == b && c > a) {
    document.write("second and third number is equal and first number is small");

}
else if (c == b && c < a) {
    document.write("second and third number is equal and first number is big");

}
else if (a == c && a < b) {
    document.write("First and third number is equal and second number is greater");
}
else if (a == b && a < c) {
    document.write("First and second number is equal and third number is greater");
}
else if (a > b && a > c) {
    document.write("a is first");
    if (b > c) {
        document.write("<br>b is second");
        document.write("<br>c is third");
    } else {

        document.write("<br>c is second");
        document.write("<br>b is third");
    }
}
else if (b > a && b > c) {
    document.write("b is first");
    if (a > c) {
        document.write("<br>a is second");
        document.write("<br>c is third");
    } else {

        document.write("<br>c is second");
        document.write("<br>a is third");
    }
}
else if (c > b && c > a) {
    document.write("c is first");
    if (b > a) {
        document.write("<br>b is second");
        document.write("<br>a is third");
    } else {

        document.write("<br>a is second");
        document.write("<br>b is third");
    }
}

else {
    document.write("All number are equals");
}