//Funció 1

function _01StringBuit(){
    let salida = ""
    let valor = document.getElementById("entrada").value
    if(valor === ""){
        salida = "La cadena està buida"
    }else{
        salida = "La cadena no està buida. Hi ha escrit: " + valor
    }
    document.getElementById("salida").innerHTML = salida
}

//Funció 2

function _02InvertirString(){
    let salida = ""
    let valor = document.getElementById("entrada").value
    salida = valor.split('').reverse().join('')
    document.getElementById("salida").innerHTML = salida
}

//Funció 3

function _03QuantesA(){
    let salida = ""
    let ocurrencias = 0;
    let valor = document.getElementById("entrada").value

    for (let i = 0; i < valor.length; i++) {
        if(valor.charAt(i) == "a"){
            ocurrencias +=1
            console.log(ocurrencias)
        }
    }
    
    salida = "El numero de as en la palabra " + valor + " es de " + ocurrencias
    document.getElementById("salida").innerHTML = salida
}

//Funció 4

function _04AbansA(){
    let salida = ""
    let novaParaula = "";
    let final = false;
    let posicion = 0;
    let valor = document.getElementById("entrada").value

    for (let i = 0; i < valor.length; i++) {
        if(valor.charAt(i) === "a" && final == false){
            posicion = i
            final = true
        }
    }
    novaParaula = valor.substr(0, posicion)
    document.getElementById("salida").innerHTML = novaParaula
}

//Funció 5

    function _05PrimeraIDarreraA(){
        let salida = ""
        let novaParaula = "";
        let final = false;
        let ocurrencias = 0;
        let valor = document.getElementById("entrada").value

        for (let i = 0; i < valor.length; i++) {
            if(valor.charAt(i) == "a"){
                ocurrencias++
            }
        }
        if(oc){

        }
    }
//Funció 6

    function _06EsborraSubstring(){
        let salida = ""
        let novaParaula = "";
        let final = false;
        let ocurrencias = 0;
        let valor = document.getElementById("entrada").value

        for (let i = 0; i < valor.length; i++) {
            if(valor.charAt(i) == "la"){

            }
        }
    }
//Funció 7
//Funció 8

    function _08CapIcua(){
        let novaParaula = "";
        let valor = document.getElementById("entrada").value

        novaParaula = valor.substr(0,1) + valor + valor.split("").reverse().join("").substr(0,1)
        document.getElementById("salida").innerHTML = novaParaula
    }
//Funció 9

    function _09NoEspais(){
        let novaParaula = "";
        let valor = document.getElementById("entrada").value

        novaParaula = valor.split(" ").join("")
        document.getElementById("salida").innerHTML = novaParaula
    }
//Funció 10

    function _10FraseAmbGuions(){
        let novaParaula = "";
        let valor = document.getElementById("entrada").value

        novaParaula = valor.split(" ")
        for (let i = 0; i < novaParaula.length; i++) {
            if(novaParaula[i] === ''){
                console.log("he pasado")
                novaParaula.splice(i,1)
            }
        }
        novaParaula.join("-")
        console.log(novaParaula)
        document.getElementById("salida").innerHTML = novaParaula
    }
//Funció 11

    function _11Acronim(){
        let array;
        let novaParaula = "";
        let valor = document.getElementById("entrada").value

        array = valor.split(" ")
        for (let i = 0; i < array.length; i++){
            novaParaula += array[i].substr(0,1)
        }

        document.getElementById("salida").innerHTML = novaParaula
    }
//Funció 12

    function _12Email(){
        let array;
        let salida = "";
        let valor = document.getElementById("entrada").value

        if(valor.includes("@")){
            if(valor.includes(".net") || valor.includes(".com") || valor.includes(".org")){
                if(valor.indexOf("@") > valor.indexOf(".net") || valor.indexOf(".org") || valor.indexOf(".com")){
                    salida = "Email vàlid"
                }else{
                    salida = "L'extensió està després de la @"
                }
            }else{
                salida = "No incluye un servidor valido"
            }
        }else{
            salida = "No incluye el caracte @"
        }

        document.getElementById("salida").innerHTML = salida
    }
//Funció 13

    function _13NumerosISigne(){
        
    }
//Funció 14

    function _14EsNumero(){
        let valor = parseInt(document.getElementById("entrada").value)

        if(isNaN(valor)){
            document.getElementById("salida").innerHTML = "No es un numero"
        }else{
            document.getElementById("salida").innerHTML = "Es un numero"
        }
    }


//Funció 15

    function _15NumeroPartEntera(){
        let valor = parseInt(document.getElementById("entrada").value)

        document.getElementById("salida").innerHTML = valor.toFixed()

    }
//Funció 16

    function _16NumeroPartDecimals(){
        let newNumber = 0;
        let valor = parseInt(document.getElementById("entrada").value)

    }
//Funció 17

    function _17Xxamb3Decimals(){
        let newNumber = 0;
        let valor = parseInt(document.getElementById("entrada").value)

        newNumber = valor/19
        document.getElementById("salida").innerHTML = newNumber.toFixed(3)
    }