function isFibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    else {
        return isFibonacci(number - 1) + isFibonacci(number - 2);
    }
}
var sum2 = 0;
var n = 10;
console.log("Day so fibonacci la : ");
for (var i = 0; i < n; i++) {
    console.log(isFibonacci(i));
    sum2 += isFibonacci(i);
}
console.log("Tong fibonacci la :" + sum2);
