module.exports = add

const routes = {

}

function middleware(req, res, next) {
    const name = `${req.method}_${req.path}`

    const route = routes[name]

    if (!route) {
        next()
    } else {
        route.handler(callback)

        function callback(err, result) {
            if (err) {
                throw err
            } else {
                res.writeHead(200, {
                    'content-type': 'application/json'
                })

                res.send(JSON.stringify(result))
            }
        }
    }
    
}
middleware.add = add

function add(method, fn) {
    const route = new Route(method, fn.name, fn)

    console.log(`Adding route ${route.name}`);

    routes[route.name] = route

    return middleware
}

function Route(method, path, handler) {
    this.name = `${method.toUpperCase()}_${path}`
    this.handler = handler
}