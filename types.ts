// simple
let myString: string = "hello".slice(0, 3);
let myNum: number = 0xf00d;
let myBool: boolean = true;
let myVar: any = true;

// arrays

// simple, valid way:
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

// different way:
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

strArr = ["hello", "cheese"];
numArr = [1, 2];
boolArr = [true, false, true];

strNumTuple = ["cheese", 4];

let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myVoid);

export {};
