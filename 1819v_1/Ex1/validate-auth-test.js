module.exports = function({express, app, passport}) {
    const redirectUri = '/loginPLZ'
    const middleware = require('./validate-auth')(redirectUri)
    app.use('/private', middleware)
}