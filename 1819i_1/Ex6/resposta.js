/*
Implemente a função profile(fn) que retorna uma função com o mesmo comportamento de fn , mas que
regista os tempos de execução de cada chamada a fn . Assuma que fn é assíncrona e retorna uma Promise.
Além disso, a função retornada por profile tem ainda um método avgDur que retorna o tempo médio de
execução de fn em milissegundos. Assuma a existência de um objecto global performance com um método now()
que retorna o instante de tempo actual em milissegundos. Exemplo:

function foo(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`RESOLVED after ${timeout} ms`),
            timeout
        )
    })
}

const bar = profile(foo)
bar(2000)
    .then(console.log)
bar(3000)
    .then(console.log)
    .then(() => console.log(bar.avgDur()))
*/

function profile(fn) {
    const times = []

    function timer(){
        const startTime = performance.now()

        return fn(arguments)
            .then(res => {
                const endTime = performance.now()
                const totalTime = endTime - startTime

                times.push(totalTime)

                return res
            })
    }

    timer.avgDur = function() {
        return times.reduce((acc, curr) => acc += curr)/times.length
    }

    return timer
}