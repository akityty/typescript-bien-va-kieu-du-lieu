function square(num) {
    return num * num;
}
console.log(square(5));
const squareFe = function square(num) {
    return num * num;
};
console.log(squareFe(4));
function add(a) {
    return function (b) {
        return a - b;
    };
}
const addWith5 = add(5);
console.log(addWith5(4));
console.log(addWith5(3));
console.log(addWith5(2));
console.log(addWith5(1));
console.log(addWith5(10));
