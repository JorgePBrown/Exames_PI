/*
A função promisify(fn) recebe como argumento fn uma função que recebe N argumentos, em que o último é uma função de ​callback ​cb​,como idioma convencionado em NodeJS. Retorna uma nova função que recebe os mesmos N-1 primeiros argumentos e retorna uma promise que será concluída com sucesso ou com erro,consoante a função de callback é invocada indicando sucesso ou erro, respetivamente. A listagem seguinte apresenta um exemplo de utilização desta função.

Implemente a função ​promisify​ de modo ter o comportamento indicado. NOTA: ​A função ​promisify deve funcionar com qualquer função que respeite os requisitos enunciados e não apenas com a função ​f​ do exemplo.

*/

function promisify(fn) {

    return function() {

        return new Promise((resolve, reject) => {

            function callback(err, result) {
                if (err) reject(err)
                else resolve(result)
            }

            arguments.push(callback)

            fn.apply(null, arguments)
        })
    }
}
