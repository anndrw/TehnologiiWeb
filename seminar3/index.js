function square(a, b) {
    return a * b;
}

console.log(square(2, 3));

function test() {
    console.log("Print");
}

let t = test();
console.log(test());

const arrSquare = (a, b) => 1 == 1 ? a * b : 0;
const arrSquare2 = (a, b) => 
    {
        if(1 == 1)
            return a * b
        else
            return 0
    };
console.log(arrSquare(2, 3));
console.log(arrSquare2(2, 3));

const arr = Object.freeze(["Ionut", "Mihai"]);
const ob = Object.freeze({x: 0, y: 0});

//arr.push("Octav"); // nu mai merge daca punem Object.freeze
console.log(arr);
//arr = [];
ob.d = 0; // o varianta foarte proasta de a adauga la obiecte
console.log(ob);

let ob1 = {color: "blue", age: 20}

function copy(ob) {
    let ob2 = ob; // shallow copy
    let ob3 = JSON.parse(JSON.stringify(ob)); // deep copy
    ob.color = "red";
    console.log(ob);
    console.log(ob2);
    console.log(ob3);
}

copy(ob1);


// Recursivitate

function loop(x){
    console.log(x);

    if (x >= 10)
        return;

    x++;
    loop(x);
}

loop(0);


// Rest Parameters

function multiplicator(multy, ...numbers){
    for (let i of numbers)
        console.log(i * multy);
}

multiplicator(2, 1, 2, 3, 4, 6);

function first(second) {
    console.log(typeof(second));
    if(typeof(second) !== "function")
        alert("Second param must be a function");
    second(); // second -- se trimite functia mai departe
                // vs second() -- se trim apelul functiei/ se invoca functia
}

function second() {
    console.log("second");
}

first(second);


// Nested function

function sum(a, b) {
    function prod(x) {
        return x * x;
    }

    return prod(a) + prod(b);
}

console.log(sum(2, 3));

function outsideFunc(x) {
    let y = 9;
    function insideFunc(y) {
        return x * y;
    }

    return insideFunc;
}

let g = outsideFunc(2)(3);
console.log(g); // sau g(3)

function Persoana(name) {
    let age;
    return {
        getName: () => name,
        setName: (newName) => name = newName,
        getAge: () => age,
        setAge: (newAge) => age = newAge,
        getNameAndAge: () => `${name} are ${age}. Este un om norocos.`
    };
}

let pers = Persoana("Ionut");
console.log(pers);
pers.setAge(20);
console.log(pers.getNameAndAge());

let myArrO = [
    {id: 1, name: "Ionut", isActive: true},
    {id: 2, name: "Octav", isActive: true},
    {id: 3, name: "Mihai", isActive: false},
]

// filter -- select * from myArr0 WHERE ...
console.log(myArrO.filter(item => item.isActive));

// find -- select top 1 where ...
console.log(myArrO.find(item => item.isActive));

// some - verifica daca indeplineste o conditie (returneaza true sau false)
    // + mai are un break fata de every -> face tot un for prin obiect 
    // dar cand indeplineste conditia face break
console.log(myArrO.some(item => item.isActive));

// every - opusul lui some
console.log(myArrO.every(item => item.isActive));

// map - similar cu SELECT din sql
console.log(myArrO.map(item => item.name));

// select name from myArr0 where...
console.log(myArrO.filter(item => item.isActive).map(item => item.name));

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((previous, current) => previous + current));
