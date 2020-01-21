module.exports = function (redirectUri) {
    return function(req, res, next) { // express middleware
        if (!req.isAuthenticated()) res.redirect(redirectUri)
        else next()
    }
}