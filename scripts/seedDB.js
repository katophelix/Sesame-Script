const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sesameScript"
);

const videoSeed = [
  {
    title: "Passing Params",
    image: "https://placeimg.com/640/480/any",
    link: "0W9uwklAR6s",
    code: [`functionName(parameter1, parameter2, parameter3) {
      code to be executed
  }`],
    definition: "Parameters are variables listed as a part of the function definition.",
    date: new Date(Date.now()),
    comments: [
      {name: "Bob",
      comment: "That's the best movie I have ever seen."},
      {name: "Tim",
      comment: "I was moved to tears."
    }
  
  ]

  },
  {
    title: "Functions",
    image: "https://placeimg.com/640/480/any",
    link: "https://www.youtube.com/watch?v=0W9uwklAR6s0W9uwklAR6s",
    code: [`function myFunction(p1, p2) {
      return p1 * p2;              // The function returns the product of p1 and p2
  }`],
    definition:
      "Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it",
    date: new Date(Date.now()),
    comments: [{
      name: "Kris",
      comment: "This is the best movie ever!"
    }]
  },
  {
    title: "Returns",
    image: "https://placeimg.com/640/480/any",
    link: "https://www.youtube.com/watch?v=0W9uwklAR6sCWvd1Oym-Hc",
    code: [`var x = myFunction(4, 3);    // Function is called, return value will end up in x

    function myFunction(a, b) {
        return a * b;            // Function returns the product of a and b
    }`],
    definition:
      "If omitted, the function does not return a value. You use the return statement to stop execution of a function and return the value of expression. If expression is omitted, or no return statement is executed from within the function, the expression that called the current function is assigned the value undefined.",
    date: new Date(Date.now()),
    comments: [{
      name: "Al",
      comment: "It's better than Cats! The musical not the animals"
    }]
  },
  {
    title: "If/Else",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: [`if (condition) {
      block of code to be executed if the condition is true
  } else { 
      block of code to be executed if the condition is false
  }`],
    definition:
      "The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's 'Conditional' Statements, which are used to perform different actions based on different conditions.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "For Loop",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: [`var text = "";
    
    for (var i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }`],
    definition:
      "The for statement creates a loop that is executed as long as a condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false. JavaScript supports different kinds of loops: for - loops through a block of code a number of times.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "For Each Loop",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: [`var sum = 0;
    var obj = {prop1: 5, prop2: 13, prop3: 8};
    
    for each (var item in obj) {
      sum += item;
    }
    
    console.log(sum); // logs "26", which is 5+13+8`],
    definition:
      "The forEach() method calls a provided function once for each element in an array, in order.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Map (loop)",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: [`var array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]`],
    definition:
      "A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration. It should be noted that a Map which is a map of an object, especially a dictionary of dictionaries, will only map to the object's insertion order—which is random and not ordered",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Variables",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: ["var = 1"],
    definition:
      "The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value. ... Undeclared variables are always global",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Object",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: [`var person = {
      firstName:"John",
      lastName:"Doe",
      age:50,
      eyeColor:"blue"
  };`],
    definition:
      "JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Array",
    image: "https://placeimg.com/640/480/animals",
    link: "2g811Eo7K8U",
    code: [`var array_name = [item1, item2, item3, ...];  `],
    definition:
      "The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects. Create an Array var fruits = ['Apple', 'Banana']; console. log(fruits. length); // 2. Access (index into) an Array item var first = fruits[0]; // Apple var last = fruits[fruits.",
    date: new Date(Date.now()), user: "",
    comments: [{
      name: "",
      comment: ""
    }]

  },
  {
    title: "Strings",
    image: "https://placeimg.com/640/480/nature",
    link: "2g811Eo7K8U",
    code: [`var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";`],
    definition:
      "A JavaScript string stores a series of characters like 'John Doe'. A string can be any text inside double or single quotes.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Numbers",
    image: "https://placeimg.com/640/480/nature",
    link: "2g811Eo7K8U",
    code: [`var x = 3.14;    // A number with decimals
    var y = 3;       // A number without decimals`],
    definition: "",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Constuctors",
    image: "https://placeimg.com/640/480/nature",
    link: "2g811Eo7K8U",
    code: [`// Constructor function for Person objects
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
    
    // Create two Person objects
    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");
    
    // Display age
    "My father is " + myFather.age + ". My mother is " + myMother.age + "."; 
    `],
    definition: "Constructors are like regular functions, but we use them with the 'new' keyword. There are two types of constructors: native (aka built-in) constructors like Array and Object, which are available automatically in the execution environment at runtime; and custom constructors, which define properties and methods for your own type of object. A constructor is useful when you want to create multiple similar objects with the same properties and methods. It’s a convention to capitalize the name of constructors to distinguish them from regular functions.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Switch Case Statements",
    image: "https://placeimg.com/640/480/nature",
    link: "2g811Eo7K8U",
    code: [`var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
    }
    "Today is " + day;
    result= Tuesday`
    ],
    definition: "The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's 'Conditional' Statements, which are used to perform different actions based on different conditions. ... The switch statement is often used together with a break or a default keyword (or both).",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "While Loops",
    image: "https://placeimg.com/640/480/nature",
    link: "",
    code: [`while (i < 10) {
      text += "The number is " + i;
      i++;
  }`],
    definition: "The while statement creates a loop that is executed while a specified condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false. JavaScript supports different kinds of loops: for - loops through a block of code a number of times.",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Imports/Exports in Node",
    image: "https://placeimg.com/640/480/nature",
    link: "",
    code: [`Message.js

    exports.SimpleMessage = 'Hello world';
    
    //or
    
    module.exports.SimpleMessage = 'Hello world';
    
    In the above example, we have attached a property "SimpleMessage" to the exports object. Now, import and use this module as shown below.
    
    app.js
    
    var msg = require('./Messages.js');
    
    console.log(msg.SimpleMessage);
    `],
    definition: "",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  },
  {
    title: "Ajax Calls",
    image: "https://placeimg.com/640/480/nature",
    link: "",
    code: [`$("button").click(function(){
      $.ajax({url: "demo_test.txt", success: function(result){
          $("#div1").html(result);
      }});
  });`],
    definition: "AJAX = Asynchronous JavaScript And XML. AJAX is not a programming language. AJAX just uses a combination of: A browser built-in XMLHttpRequest object (to request data from a web server) JavaScript and HTML DOM (to display or use the data)",
    date: new Date(Date.now()),
    comments: [{
      name: "",
      comment: ""
    }]
  }
];

db.Video
  .remove({})
  .then(() => db.Video.collection.insertMany(videoSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

