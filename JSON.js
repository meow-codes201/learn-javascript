// JSON = JavaScript object Notation - date interchange format used for echanging data between a server and a web application.
// JSON files {key:value} OR [value1,value2,value3...]
// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object
fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value)
    )



/*


const names = ["Spongebob","Patrick","Squidward","Sandy"]
const person = {
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["jellyfishing","karate","cooking"]
}
const people = [{
    "name":"Spongebob",
    "age":30,
    "isEmployed":true
},
{
    "name":"Patrick",
    "age":34,
    "isEmployed":false
},
{
    "name":"Squidward",
    "age":50,
    "isEmployed":true
},
{
    "name":"Sandy",
    "age":37,
    "isEmployed":false
}
]
const jsonString1 = JSON.stringify(names);
console.log(jsonString1);
const jsonString2 = JSON.stringify(person);
console.log(jsonString2);

const jsonString3 = JSON.stringify(people);
console.log(jsonString3);

console.log(JSON.parse(jsonString1));

console.log(JSON.parse(jsonString2));
console.log(JSON.parse(jsonString3));*/