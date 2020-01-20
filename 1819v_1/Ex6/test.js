module.exports = function({express, app}) {
    app.use('/', express.static('.'))
}