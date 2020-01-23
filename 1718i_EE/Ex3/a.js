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

const squareInc = compose(square, inc)

squareInc(2, (err, data) => {
    console.log(
        'square(inc(2)) --> ' + data)
    }
)