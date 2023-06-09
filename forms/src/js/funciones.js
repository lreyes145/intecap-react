function esPalindrome ( texto ){  
    const arrNormal = Array.from(texto).toString()
    const arrReves = Array.from(texto).reverse().toString()

    return arrNormal === arrReves ?
       `La palabra ${texto} es palíndrome` : `La palabra ${texto} no es palíndrome`
}

function sustituirCaracter ( nombre, caracter ){
    let vocalesReg = /[aeiouAEIOUáéíóúÁÉÍÓÚ]/g
    return nombre.replace(vocalesReg, caracter)
}

function getBirthday( nombre, date ){
    const today = moment(new Date())
    date = moment(date)
    return `${nombre} tiene ${today.diff(date, 'years')} años de edad.`   
}

function obtenerNumerosPrimos () {
    let numerosPrimos = []
    for (let index = 2; index <= 100; index++) {
        esPrimo(index) && numerosPrimos.push(index)
    }
    return numerosPrimos
}

function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}