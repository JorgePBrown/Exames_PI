/*
A execução do código da listagem seguinte, apresenta na consola o resultado abaixo da listagem:

class ​MyClass​ { 
    constructor(​success​, ​a​,​b​,​c​,) {   
        this.​success​ = ​success​; this.​a​ = ​a​; this.​b​ = ​b​; this.​c​ = ​c
    }
    ​m​(​cb​) {
        ​f​(this.​success​, this.​a​, this.​b​, this.​c​, ​cb​) 
    }
}

let ​mc​ = new ​MyClass​(true, ​4​,​5​,​6​)
let ​fm​ = ​promisify​(​mc​.​m​) ​// [1]
showPromiseResult​(​fm​())

Error is TypeError: Cannot read property 'success' of undefined

Alterando apenas a assinatura da função ​promisify e uma linha de código na implementação realizada anteriormente,corrija o erro de modo a que o resultado seja o esperado. Indique também a alteração necessária na chamada à função na linha [1] da listagem anterior, de modo o que o erro não ocorra. NOTA: Indique apenas as alterações. Não reimplemente na totalidade a função ​promisify​.

*/

function promisify(target, fn) { // alteração dos parâmetros

    return function() {

        return new Promise((resolve, reject) => {

            function callback(err, result) {
                if (err) reject(err)
                else resolve(result)
            }

            arguments.push(callback)

            fn.apply(target, arguments) // utilização do novo parâmetro
        })
    }
}

/*
É necessário definir o this na chamada a fn. Assim o target é recebido como parâmetro e é usado como 1º parâmetro no método apply.

O código na linha [1] passaria a ser:
let ​fm​ = ​promisify​(​mc, mc​.​m​)
*/