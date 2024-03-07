var hello = "Hello";

// Functions
function add(a, b) {
    return a + b;
}

var multiplyResult = function (a, b) {
    return a * b;
};

var printA = function (a) {
    console.log(a);
    console.log("a : " + a);
};

printA("I am A!");

// Objects
Person = {
    firstName: "Jane",
    lastName: "Doe",
    pets: {
        dog: "Doggy",
        cat: "Kitty",
        rabbit: "Bunny",
    },
    singing: function (a, b) {
        return a + " is a song by " + b;
    },
};

console.log(Person);
console.log(Person.singing("Greedy", "Tate McRae"));
console.log(Person.pets.dog);

// Conditional Statements
var a;
var b = 5;
if (a == undefined && b == undefined) {
    console.log("a and b are undefined");
} else if (a != undefined && b == undefined) {
    console.log("a is defined, b is undefined");
} else if (a == undefined && b != undefined) {
    console.log("a is undefined, b is defined");
} else {
    console.log("a and b are defined");
}

// For Loops
var sum = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
    sum += i;
    console.log("Total of i's is: " + sum);
}

// Increasing For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Decreasing For Loop
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// Default values in a function
function orderChickenWith(sidedish) {
    sidedish = sidedish || "whatever";
    console.log("Chicken with" + sidedish);
}
orderChickenWith("noodles");
orderChickenWith();

// Creating Objects
var Person = {
    fname: "Maria",
    pets: {
        dog: "Tris",
        cat: "Meot",
    },
    $bankBalance: 25,
    faveMeal: {
        breakfastForDinner: "Chicken & Waffles",
    },
};

console.log(Person);
console.log(
    "The person's pets are " + Person.pets.dog + " and " + Person.pets.cat
);
console.log(Person["fname"]);
console.log(Person["pets"]["cat"]);
console.log(
    "The person's favorite meal is " + Person["faveMeal"]["breakfastForDinner"]
);

// Function Factory
function Robot(name, weight, color) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.intro = function () {
        console.log(
            "My name is " +
                this.name +
                ", and I weigh " +
                this.weight +
                " lbs. I am " +
                this.color +
                " in color!"
        );
    };
}

var p1 = new Robot("Rob", 24, "Orange");
p1.intro();

// Passing Functions As Arguments
function multiplication(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
}

var mulitplyBy3 = multiplication(3);
console.log(mulitplyBy3(10));

function doAdditionOn(x, operation) {
    return operation(x);
}

var result = doAdditionOn(5, mulitplyBy3);
console.log(result);

// Function Factory with Protoptype(Prototype is shared across multiple occurences of Objects. It is only created when called.)
function Robot2(name, weight) {
    this.name = name;
    this.weight = weight;
}

Robot2.prototype.intro = function () {
    console.log("My name is Bond. " + this.name + " Bond!");
};

r2 = new Robot2("Penny", 5);
r2.intro();

// Object Literal
var dog = {
    legs: 4,
    ears: 2,
    printLegs: function () {
        return dog.legs;
    },
};

console.log(dog.legs);

// Arrays
var list = new Array();
list[0] = "Bob";
list[1] = 27;
list[2] = true;
list[3] = function (name) {
    console.log("hello " + name);
};

console.log(list);
console.log(list[1]);
list[3]("Wally");
list[3](list[0]);

for (let i = 0; i < list.length; i++) {
    if (list[i] == 27) {
        console.log(i);
    }
}

//Iterating through an Array
var names = ["Jerry", "Lilly", "Penny"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
