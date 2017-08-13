'use strict';

// The following is syntactic sugar for:
  // let Person = function(firstname, lastname){
  //   this.firstname = firstname;
  //   this.lastname = lastname;
  // }
  //
  // Person.prototype.greet = function(){
  //   console.log(`Hello, ${this.firstname} ${this.lastname}`);
  // }

class Person {
  // This function works like the function constructors we have been using before, the members here are created on every object that is an instance of this class
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // Methods outside of the constructor are automatically put on the prototype of any instances of this class
  greet(){
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }

}

class PoliceOfficer extends Person {
  constructor(firstname, lastname, badgeNo){
    // Calls the constructor of the super class, implicitly passes 'this'
    super(firstname, lastname);
    this.badgeNo = badgeNo;
  }

  arrest(){
    console.log("You've been arrested");
  }

}

let john = new Person('John', 'Smith');
john.greet();

let jane = new PoliceOfficer('Jane', 'Doe', 1234);
jane.greet();
jane.arrest();
