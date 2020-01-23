function nodify(promiseFunction) {

    return function callbackFunction() {
        const argumentsArray = [...arguments] // turn arguments into actual array
        const callback = argumentsArray.pop()
        
        promiseFunction.apply(null, argumentsArray)
            .then(res => callback(null, res))
            .catch(err => callback(err))
    }
}

function f(success, a, b, c) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve(a+b+c):reject("err")
            console.log(`Success: ${success} `)   
        }, 2000) 
    })
}

function showCbFunctionResult(f, ...args) {
    f.apply(this, args.concat(cb)) 
    function cb(err, res) {err ? console.log(`Error is ${err}`) : console.log(`Result is ${res}`) }
}

let fp = nodify(f)

showCbFunctionResult(fp, true, 1,2,3)

showCbFunctionResult(fp, false, 1,2,3)