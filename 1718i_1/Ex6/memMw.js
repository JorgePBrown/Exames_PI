/*
Implemente o módulo memMwque retorna um middlewareexpress que memoriza a resposta dada aos pedidos HTTP que retornam conteúdos em JSON, como é o caso do middleware construído por restMw.

Pedidos futuros para o mesmo path deverão retornar a resposta memorizada, sem que o pedido HTTP chegue ao middleware que o produziu num pedido anterior. O middleware dado memMw deve ser adicionado a uma aplicação Express antes de qualquer outro que produza respostas HTTP no formato JSON e que se queiram memorizar.

*/

const data = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {}
}

module.exports = function (req, res, next) {
    const cachedData = data[req.method][req.path]

    if (cachedData) {
        res.writeHead(200, {
            'content-type': 'application/json'
        })
        res.end(cachedData)
    } else {
        const oldWrite = res.write

        let dataAccumulator = ''

        function newWrite(data) {
            dataAccumulator += data
            oldWrite.apply(res, arguments)
        }

        res.write = newWrite

        res.on('finished', () => {
            const content_type = res.getHeader('content-type')
            if(content_type && content_type.includes('application/json'))
                data[req.method][req.path] = dataAccumulator
        })

        next()
    }
}