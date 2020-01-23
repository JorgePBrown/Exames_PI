function autoRouter(service) {
    for(let fName in service) {
        const method = fName.substring(0, fName.indexOf('_'))
        const path = fName.substring(fName.indexOf('_') + 1)

        // register
        this[method](path, trampoline(method, service[fName]))
    }
}

function trampoline(method, fn) {
    const paramNames = getParamNames(fn)

    if (method == 'GET')
        return function(req, res) {
            const args = paramNames.map(v => req.query[v])
            
            args.push(res)

            fn.apply(null, args)
        }
    else
    if (method == 'POST' || method == 'PUT')
        return function(req, res) {
            const args = paramNames.map(v => req.body[v])
            
            args.push(res)

            fn.apply(null, args)
        }
    else
        return function(req, res) {
            fn.call(null, res)
        }
}