function numInt(f, a, b, n) {
    let dx = (b - a) / n;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let x = a + i * dx;
        sum += f(x);
    }

    return sum * dx;
}

function rationalFunc(x) {
    return 1 / (1 + x * x);
}

console.log(numInt(rationalFunc, 2, 5, 10));