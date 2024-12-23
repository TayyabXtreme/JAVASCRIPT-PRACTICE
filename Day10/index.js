var userName   ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem, eos atque minus corporis voluptas maxime a reprehenderit quidem numquam, labore laudantium commodi necessitatibus odio optio ducimus eum harum ex?"
userName = userName.trim()
userName = userName[0].toUpperCase()+userName.substring(1).toLowerCase()

var i=0;

while(i<userName.length){
    if(userName.charCodeAt(i)==32){
        // console.log(i)
        let previousdata = userName.substring(0,i+1) //previous data 
        let newdata = userName[i+1].toUpperCase()+ userName.substring(i+2).toLowerCase()
        userName = previousdata + newdata
        
    }
    else(userName.charCodeAt(i)<97){
        let previousdata = userName.substring(0,i) //previous data 
        let newdata = userName[i-32].toUpperCase()+ userName.substring(i-32+2).toLowerCase()
        userName = previousdata + newdata
    }

    i++
}
console.log(userName)