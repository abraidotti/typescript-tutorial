function getSum(num1: number, num2: number) {
  return num1 + num2;
}

// console.log(getSum('1', 4)); // error
console.log(getSum(1, 4));

// specify a returned type
let mySum = function (num1: number, num2: any): number {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 == "string") {
    num2 = parseInt(num2);
  }

  return num1 + num2;
};

console.log(mySum(3, 5));
console.log(mySum(3, "5"));

function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return firstName + " " + lastName;
}

function myVoidFunction(): void {
  return;
}

console.log(getName("john", "doe"));
