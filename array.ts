const list: number[] = [1, 2, 3];
const categories: Array<string> = ["spot", "car", "it"];
console.log(list);

//toFixed(số ký tự sau dấu ',' mong muốn): là hàm thiết lập số thập phân
list.forEach((num) => console.log(num.toFixed(2)));

//includes('thành phần'): là hàm trả về true or false nếu trong mảng có chứa thành phần 'thành phần' hay không
console.log('categories');
categories.forEach((str)=>console.log(str.includes('a')));

// convert mảng từ dạng này sang dạng khác.
const listSquare = list.map(num=>num*num);
console.log(listSquare);

// filter('điều kiện '): lọc các thành phần thỏa mãn 'điều kiện'
const result = categories.filter(str => str.length > 2);
console.log(result);

// tuple kiểu
let x: [string,number,string];

x = ["hello", 10,""];
console.log(x);
// substr(n) cắt đi n phần tử đầu tiên của mảng
console.log(x[0].substr(2));
x[2]="world";
console.log(x[1].toString());
console.log(x);



