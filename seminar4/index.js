const posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"}
];

// programam asyncron (async) ca aplicatia web sa fie responsive mereu pt utilizator, sa nu devina not responding
// callback
// promise
// async await

function getPost(){
    setTimeout(() => {
        let output = [];
        posts.forEach((post) => {
            output.push(post);
        })

        console.log(output);
    }, 1000)
}

function createPost(post, callback){
    setTimeout(() => {
       posts.push(post)
       console.log("Adaugare")
       callback();
    }, 2000)
}

getPost();
//createPost({title:"Post 3", body:"Post ul este 3"}, getPost);

function createPostPromise(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            console.log("Adaugare Promise")
            const error = false;
            if(!error)
                resolve();
            else
                reject("Eroare");
            
         }, 2000)
    })
}
// try catch nu merge pe un promise, deci folosim .catch si .finally
// createPostPromise({title:"Post 3", body:"Post ul este 3"})
// .then(getPost)
// .catch(e => console.log(e))
// .finally(() => console.log("Da"))

const promise1 = Promise.resolve("Hello");
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Bye")
})
const promise3 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()) // fetch la date json

Promise.all([promise1, promise2, promise3]).then(values => console.log(values)); // values sunt parametrii adica promise1, promise2, promise3

async function createElem() { // try catch pt async merge! async permite sa foloseasca .then, .catch, .finally. Este integrat Promise ul in el practic.
    await createPostPromise({title: "Post 3", body: "This is post 3"});
    getPost();
}
createElem({title: "Post 3", body: "This is post 3"});
console.log(1);

async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    let data = await res.json();
    console.log(data);
}

fetchData();

function* square(number){
    while(true){
        yield number * number; // yield intr-o functie cu pointer/generatoare inseamna return
        number *= number; // obligatoriu asta
    }
}

const generator = square(2);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return()); // aici se opreste generarea
console.log(generator.next());
// console.log(generator.throw()); // arunca eroare

let Btn = document.getElementById("buton2");
if(Btn){
    Btn.addEventListener("click", function(e){
        e.preventDefault(); // anulam natura la <form> ce normal el da refresh odata ce isi face treaba. Form e parinte la butonul2
        e.stopPropagation(); // vine la pachet cu preventDefault, in caz ca se modifica Form, aceasta functie pastreaza anularea

        console.log(1888);
    })
}
