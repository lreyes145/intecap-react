document.addEventListener("DOMContentLoaded", function (){

    const boton1 = document.getElementById("ejecutar1")
    const boton2 = document.getElementById("ejecutar2")
    const boton3 = document.getElementById("ejecutar3")
    const boton4 = document.getElementById("ejecutar4")

    const txtpalindrome     = document.getElementById("txtpalindrome")
    const txtnombre         = document.getElementById("txtnombre")
    const txtcaracter       = document.getElementById("txtcaracter")
    const txtnombrecompleto = document.getElementById("txtnombrecompleto")
    const txtfecha          = document.getElementById("txtfecha")

    const respuesta1 = document.getElementById("respuesta1")
    const respuesta2 = document.getElementById("respuesta2")
    const respuesta3 = document.getElementById("respuesta3")
    const respuesta4 = document.getElementById("respuesta4")

    boton1.addEventListener('click', function() {
        respuesta1.innerText = esPalindrome(txtpalindrome.value)
    });

    boton2.addEventListener('click', function () {
        respuesta2.innerText = sustituirCaracter(txtnombre.value, txtcaracter.value)
    });

    boton3.addEventListener('click', function () {
        respuesta3.innerText = getBirthday(txtnombrecompleto.value, txtfecha.value)
    });

    boton4.addEventListener('click', function () {
        respuesta4.innerText = obtenerNumerosPrimos()
    });

});