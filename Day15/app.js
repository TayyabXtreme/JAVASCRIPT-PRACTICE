function color(col){
    document.querySelector("p").style.color=col;
}
var text = document.querySelector("p")
        var newtext = text.style.fontSize.split("px")
       
function increase(check){
    if (check == 0) {
        var text = document.querySelector("p")
        var newtext = text.style.fontSize.split("px")
       
        var newFontSize = ((Number(newtext[0])) + 5 )+ "px"
    
        text.style.fontSize = newFontSize

    }
    else if (check == 1) {

        var text = document.querySelector("p")
        var newtext = text.style.fontSize.split("px")
        var newFontSize = ((Number(newtext[0])) - 5 )+ "px"
        
        text.style.fontSize = newFontSize
    }
}
var a=0;
function bold(){
    if(a==0){
        a=1;
    document.querySelector("p").style.fontWeight=900;
    }
    else{
        a=0;
        document.querySelector("p").style.fontWeight=100;
    }
}
function Italic(){
    if(a==0){
        a=1;
    document.querySelector("p").style.fontStyle="Italic";
    }
    else{
        a=0;
        document.querySelector("p").style.fontStyle="normal";
    }
}