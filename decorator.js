// DEcorators are functions that takes an function as its argument and alters it's behaviour.
//Decorators are higher order function.

// we are going to modify the slow function which is cpu intensive by storing value in the cache so everytime
//repeated parameters are called it is 
function slow(x) {
    //here goes the code for CPU intensive task
    alert(`${x}`);
}

let cacheDecorator = function (func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}
slow = cachingDecorator(slow);

alert(slow(1)); // slow(1) is cached and the result returned
alert("Again: " + slow(1)); // slow(1) result returned from cache

alert(slow(2)); // slow(2) is cached and the result returned
alert("Again: " + slow(2)); // slow(2) result returned from cache