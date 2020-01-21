module.exports = function(redirectUrl) {
    return function( req , rsp , next ) {
        if (req.isAuthenticated()) {
            return next();
        }
        rsp.redirect(redirectUrl)
    }
}