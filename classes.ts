interface UserInterface {
  name: string;
  email: string;
  age: number;
  register(): void;
  payInvoice(): void;
}

class User implements UserInterface {
  public name: string;
  public email: string;
  public age: number;

  //public, private, protected

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User created: " + this.name);
  }

  register() {
    console.log(this.name + " is now registered.");
  }

  payInvoice() {
    console.log("Invoice paid.");
  }
}

let john = new User("John", "john@ggggg.com", 23);

console.log("a new user's name:", john.name);

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
  }

  payInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(1, "mike", "mike@ggggggg.com", 24);
