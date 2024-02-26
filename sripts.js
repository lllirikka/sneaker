const body = document.querySelector("body")
const sneaker = document.querySelectorAll('.sneaker')

body.onkeydown = function (event) {
    if (event.keyCode == 17){
        sneaker[4].style.backgroundColor = "gray"
    }

}

sneaker[5].onclick = function() {
    sneaker[5].style.backgroundColor = "blue"
}

sneaker[5].onmouseover = function() {
    sneaker[5].style.backgroundColor = "gray"
}
