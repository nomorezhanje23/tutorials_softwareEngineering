/*const  person = {
    firstName: 'Nomore',
    lastName: 'Zhanje',
    age: 29,
    hobbies: ['music', 'movies', 'rugby'],
    address: {
        street: '50 Main Str',
        city: 'Cape Town',
        province: 'Western Cape'
    }
}

person.email = 'nomore@gmail.com'

console.log(person.address.city);*/

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompeleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompeleted: true
    },
    {
        id: 3,
        text: 'Dentist app',
        isCompeleted: true
    },
];
/* This prints out the only one property that is needed

console.log(todos[1].text); gives us => Meeting with boss */

/* CREATING A JSON STRING

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */

//----------------------------------------------------------------------------------for loop

/*for( let i = 0; 1 < 10; i++){
    console.log(i);
}

//while loop

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.id);
}*/

//----------------------high order for loop

//1. forEach

/*todos.forEach(function(todo){
    console.log(todo.text);
});*/

//2. map

/*const todoText = todos.map(function(todo)
{
    return todo.text;
});

console.log(todoText);*/

//3. filter

//this produces an array that contains everything

const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompeleted === true;
});

console.log(todoCompleted);


