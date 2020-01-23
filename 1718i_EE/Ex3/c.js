function waterfall(arg, funcs, cb) {
    const fn = funcs.shift()
    
    if (!fn) cb(null, arg)
    else fn(arg, nextFunc)

    function nextFunc(err, ret) {
        if (err) {
            cb(err)
        } else {
            waterfall(ret, funcs, cb)
        }
    }

}


function compose(outer, inner) {
    return function() {
    
        const callbackIndex = arguments.length - 1
        const outerCallback = arguments[callbackIndex]

        arguments[callbackIndex] = auxOuter

        function auxOuter(err, innerResult) {
            if (err) {
                outerCallback(err)
            } else {
                outer(innerResult, outerCallback)
            }
        }

        return inner.apply(null, arguments)
    }
}


function inc(arg, cb) {
    
    console.log('inc(' + arg + ') --> ' + ++arg)
    cb(null, arg)
}

function square(arg, cb) {
    const res = arg * arg
    console.log('square(' + arg + ') --> ' + res)
    cb(null, res)
}

function dup(arg, cb) {
    const res = arg * 2
    console.log('dup(' + arg + ') --> ' + res)
    cb(null, res)
}

waterfall(
    2,
    [inc, square, dup],
    (err, data) => {
        console.log('dup(square(inc(2))) = ' + data)
    }
)