function square(num: number) {
    return num * num;
}

console.log(square(5));

const squareFe = function square(num: number) {
    return num * num;
};
console.log(squareFe(4));

function add(a: number): Function {
    return function (b: number): number {
        return a - b;
    }
}

const addWith5 = add(5);
console.log(addWith5(4));
