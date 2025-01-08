let str: string = 'hi';
let num: number = 10;
let isLoggedIn: boolean = true;
let user: object = { name: 'capt', age: 100};
let arr: number[] = [1,2,3];
let arr1: Array<number> = [1,2,3];

let arr2: [string, number] = ['hi', 10];
// arr2[1].concat('!');

enum Avengers {
    Capt,
    IronMan,
    Thor
}

let hero: Avengers = Avengers.Capt;
let hero1: string = Avengers[0];

let str1: any = 'hi';
let num1: any = 10;

function printSomething(): void {
    console.log('sth');
}

function returnNothing(): void {
    return;
}

// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function loopForever(): never {
    while(true) {

    }
}

function neverEnd(): never {
    throw new Error('unexpected');
}