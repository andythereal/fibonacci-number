const fn = Number(prompt('Your Number: '));

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
document.write('Calculator #1 -> Your Fibonacci Number: ' + fibonacci(fn));

function fibonacci2(n) {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n - 1];
}
document.write('<br>' + 'Calculator #2 -> Your Fibonacci Number: ' + fibonacci2(fn));
