var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    //public, private, protected
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered.");
    };
    User.prototype.payInvoice = function () {
        console.log("Invoice paid.");
    };
    return User;
})();
var john = new User("John", "john@ggggg.com", 23);
console.log("a new user's name:", john.name);
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        _super.call(this, name, email, age);
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
})(User);
var mike = new Member(1, "mike", "mike@ggggggg.com", 24);
