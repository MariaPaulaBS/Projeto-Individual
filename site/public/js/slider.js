// var radio = document.querySelector('.btnImg')

// var contador = 0;
// document.getElementById('git0').checked = true

// setInterval(() => {
//     direita()
// }, 5000);

// function esquerda () {
//     contador --
//     if(contador < 0) {
//         contador = 6
//     }
//     document.getElementById('git'+ contador).checked = true
// }
// function direita() {
//     contador ++ 

//     if(contador > 6) {
//         contador = 0
//     }
//     document.getElementById('git'+ contador).checked = true
// }

var radio = document.querySelector('.btn_manual')

var contador = 0



document.getElementById('slide0').checked = true



setInterval(() => {

    proximaImg()

}, 5000)



function proximaImg() {

    contador ++



    if (contador > 6) {

        contador = 0

    }



    document.getElementById('slide'+contador).checked = true

}

