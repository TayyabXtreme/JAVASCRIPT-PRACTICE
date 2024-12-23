let div = document.getElementsByTagName("div") //array

// console.log(div[0].innerHTML)
// console.log(div[0].innerText)

var firstUser = document.getElementById("firstUser")
var SecondUser = document.getElementById("secondUser")

var name1 = prompt("enter name first user")
var name2 = prompt("enter name first user")

var game = document.getElementById("game")

var check = 0

var td = document.getElementsByTagName("td")



//user value 
function StartGame() {

    if (firstUser.value == "" && SecondUser.value == "") {
        alert("plz enter corect data")
    }
    else if (firstUser.value.toString().toLowerCase() == "x" || firstUser.value.toString().toLowerCase() == "0") {
        if (firstUser.value.toString().toLowerCase() == "x" && SecondUser.value.toString().toLowerCase() == "0") {
            console.log("get correct data")
            game.style.display = "block"

            document.getElementById("userinput").style.display="none";
        }
        else if (firstUser.value.toString().toLowerCase() == "0" && SecondUser.value.toString().toLowerCase() == "x") {
            console.log("get correct data")
            game.style.display = "block"



        }
        else {
            console.log("second value incorrect")
        }

    }
    else {
        console.log("enter correct data in first field")
    }


}

function Check(t) {
    if (check == 0 && t.innerText == "") {
        t.innerText = firstUser.value
        t.style.backgroundColor="green"
        setTimeout(() => 
        (CheckGame(), 3000)
        )

        check = 1
    }
    else if (check == 1 && t.innerText == "") {
        t.innerText = SecondUser.value
        t.style.backgroundColor="pink"
        check = 0
        setTimeout(() => 
        (CheckGame(), 3000)
        )



    }
}
flag=true;
function CheckGame() {
    let x = firstUser.value.toString().toLowerCase()
    let y = SecondUser.value.toString().toLowerCase()

    if (
        td[0].innerText == x &&
        td[1].innerText == x &&
        td[2].innerText == x ||
        td[3].innerText == x &&
        td[4].innerText == x &&
        td[5].innerText == x ||
        td[6].innerText == x &&
        td[7].innerText == x &&
        td[8].innerText == x ||
        td[0].innerText == x &&
        td[3].innerText == x &&
        td[6].innerText == x ||
        td[1].innerText == x &&
        td[4].innerText == x &&
        td[7].innerText == x ||
        td[2].innerText == x &&
        td[5].innerText == x &&
        td[8].innerText == x ||
        td[0].innerText == x &&
        td[4].innerText == x &&
        td[8].innerText == x ||
        td[2].innerText == x &&
        td[4].innerText == x &&
        td[6].innerText == x && flag




    ) {
        // td[0].style.textDecoration = "line-through"
        // td[1].style.textDecoration = "line-through"
        // td[2].style.textDecoration = "line-through"
        alert(name1+" user win")
        flag=false;
        // return 0;
        

    }
    else if (
        td[0].innerText == y &&
        td[1].innerText == y &&
        td[2].innerText == y ||
        td[3].innerText == y &&
        td[4].innerText == y &&
        td[5].innerText == y ||
        td[6].innerText == y &&
        td[7].innerText == y &&
        td[8].innerText == y ||
        td[0].innerText == y &&
        td[3].innerText == y &&
        td[6].innerText == y ||
        td[1].innerText == y &&
        td[4].innerText == y &&
        td[7].innerText == y ||
        td[2].innerText == y &&
        td[5].innerText == y &&
        td[8].innerText == y ||
        td[0].innerText == y &&
        td[4].innerText == y &&
        td[8].innerText == y ||
        td[2].innerText == y &&
        td[4].innerText == y &&
        td[6].innerText == y  && flag



    ) {
        // td[0].style.textDecoration = "line-through"
        // td[1].style.textDecoration = "line-through"
        // td[2].style.textDecoration = "line-through"

        alert(name2 + " user win")
        flag=false;
    }


}