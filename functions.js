function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum('1', 4)); // error
console.log(getSum(1, 4));
// specify a returned type
var mySum = function (num1, num2) {
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
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function myVoidFunction() {
    return;
}
console.log(getName("john", "doe"));