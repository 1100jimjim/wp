function filter(a, f) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(filter([1, 2, 3, 4], function(x) { return x % 2 == 1; }));
