module.exports = function (redirectUri) {
    return function(req, res, next) { // express middleware
        if (!req.user) res.redirect(redirectUri)
        else next()
    }
}