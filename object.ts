/*
interface Iuser {
    name: string;
    age: number;
}

let customer: Iuser = {
    name: "Cong",
    age: 50
};
console.log(customer);

*/
class Shape {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return '(x:'+this.x+','+'y:'+this.y+')';
    }
}

interface IArea {
    area(): number;
}

class Rect extends Shape implements IArea {
    constructor(x: number, y: number, public width: number, public height: number) {
        super(x, y);
    }

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rect(5, 5, 10, 30);
console.log(rect.area());
console.log(rect.toString());

