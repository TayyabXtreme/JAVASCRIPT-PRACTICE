var Name=prompt("Enter your name");
var product=prompt("Enter the product name \n like: \n MOUSE \t price : 250 \n KEYBOARD\t price : 300 \n speaker \t price : 1000\n USB \t price : 500\n Mike\t price : 220");

if(product.toLowerCase()=="keyboard"){
    var quantity=+prompt(`How many you want ${product}`);
    document.write(`${Name} want ${quantity} ${product} the total bill is ${quantity*300} `);    
}
else if(product.toLowerCase()=="mouse"){
    var quantity=+prompt(`How many you want ${product}`);
    document.write(`${Name} want ${quantity} ${product} the total bill is ${quantity*250} `); 
}
else if(product.toLowerCase()=="usb"){
    var quantity=+prompt(`How many you want ${product}`);
    document.write(`${Name} want ${quantity} ${product} the total bill is ${quantity*500} `);
}
else if(product.toLowerCase()=="speaker"){
    var quantity=+prompt(`How many you want ${product}`);
    document.write(`${Name} want ${quantity} ${product} the total bill is ${quantity*1000} `);
}
else if(product.toLowerCase()=="smike"){
    var quantity=+prompt(`How many you want ${product}`);
    document.write(`${Name} want ${quantity} ${product} the total bill is ${quantity*220} `);
}
else{
    // var quantity=+prompt(`How many you want ${product}`);
alert("we have not this product",product);
}


