function is_prime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function sum_of_primes(a, b) {
    var sum = 0;
    for (var i = a; i <= b; i++) {
        if (is_prime(i)) {
            sum += i;
        }
    }
    return sum;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var sum = sum_of_primes(a, b);
    document.getElementById('result').innerText = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là " + sum;
});
