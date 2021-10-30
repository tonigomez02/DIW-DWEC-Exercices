function options(param) {
    let valor = document.getElementById("entrada").value
    let salida = document.getElementById("salida")
    let arrayValor = valor.split(",")
    let retorno = "";
    param = parseInt(param)

    switch (param) {

        case 0:
            arrayValor.map(function (currentValue, index, array){
                if (index === array.length -1){
                    retorno += currentValue
                }else {
                    retorno += currentValue + "$"
                }
            })
            salida.innerHTML = retorno
            break
        case 1:
            let array2 = ["zen", 19, "choice"]
            retorno = arrayValor.concat(array2)
            salida.innerHTML = retorno
            break
        case 2:
            retorno = arrayValor.splice(2, 1)
            salida.innerHTML = arrayValor + " - Elemento eliminado: " + retorno
            break
        case 3:
            arrayValor.splice(2, 1, "Doe", 3.1415)
            salida.innerHTML = arrayValor
            break
        case 4:
            arrayValor.sort()
            salida.innerHTML = arrayValor
            break
        case 5:
            arrayValor = arrayValor.map(value => parseInt(value))
            salida.innerHTML = arrayValor.sort((a, b) => a - b)
            break
        case 6:
            arrayValor = arrayValor.map(value => parseInt(value))
            salida.innerHTML = arrayValor.sort((a, b) => b - a)
            break
        case 7:
            salida.innerHTML = arrayValor.sort((a, b) => b.length - a.length)
            break
        case 8:
            arrayValor = arrayValor.map(value => value.length)
            arrayValor.sort((a, b) => a - b)
            salida.innerHTML = arrayValor
            break
        case 9:
            arrayValor.map(function (currentValue, index, array){
                if (index === array.length -1){
                    retorno += currentValue
                }else {
                    retorno += currentValue + "-"
                }
            })
            salida.innerHTML = retorno
            break
        case 10:
            arrayValor.map(value => retorno += value.substr(0,1).toUpperCase())
            salida.innerHTML = retorno
            break
        case 11:
            arrayValor = arrayValor.filter(value => value.length>5)
            salida.innerHTML = arrayValor
            break
        case 12:
            retorno = 0;
            arrayValor = arrayValor.map(value => parseInt(value))
            arrayValor.forEach(value => retorno +=value)
            salida.innerHTML = retorno
            break
        case 13:
            retorno = 0;
            arrayValor.map(value => value=="la"? retorno+=1:"")
            salida.innerHTML = retorno
            break
        case 14:
            arrayValor = arrayValor.map(value => parseInt(value))
            salida.innerHTML = arrayValor.reduce((valorAnterior,valorActual) => valorAnterior + valorActual)
            break
        case 15:
            retorno = parseInt(arrayValor[0])
            arrayValor.forEach(function (currentValue, index,array){
                if (array[index + 1] !== undefined){
                    if (retorno > parseInt(array[index + 1])){
                    }else {
                        retorno = parseInt(array[index + 1])
                    }
                }
            })
            salida.innerHTML = retorno
            break
        case 16:
            let retorno2;
            retorno = arrayValor.splice(0,1)
            retorno2 = arrayValor.splice(arrayValor.length-1,1)
            retorno = retorno.concat(retorno2)
            let mitad = arrayValor.length / 2
            arrayValor.splice(mitad, 0, retorno)
            salida.innerHTML = arrayValor
            break
        case 17:
            arrayValor = arrayValor.map(value => parseInt(value))
            retorno = arrayValor.splice(0,3)
            retorno = retorno.reverse()
            arrayValor = arrayValor.concat(retorno)
            salida.innerHTML = arrayValor
            break
    }
}