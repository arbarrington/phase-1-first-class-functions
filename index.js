function receivesAFunction(aFunction) {
    aFunction()
}

function aNamedFunction() {
    return "before all"
}

function returnsANamedFunction(aNamedFunction) {
    function aNamedFunction() {
        return;
    }
    return aNamedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {};
}





