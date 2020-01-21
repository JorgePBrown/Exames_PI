module.exports = function() {
    const express = require('express')

    const app = express()

    // Option 1
    
    app.start = function(host, port) {
        app.listen(port, host, () => {
            console.log(`Listening on port ${port} of host ${host}`);
        })
    }

    return app;
    

    // Option 2
    /*
    return {
        put: app.put,
        get: app.get,
        delete: app.delete,
        post: app.post,
        use: app.use,
        start: function (host, port) {
            app.listen(port, host, () => {
                console.log(`Listening on port ${port} of host ${host}`);
            })
        }
    }
    */
    
}