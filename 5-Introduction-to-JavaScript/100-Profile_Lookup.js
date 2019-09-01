// The function will check to see if the name is a contact's firstName and that the prop is the property of the contact. If true, the value of that property will return, if not the return will be "No such contact" The first name is checked first, if that passes it goes to property. The first name needs to come first - if the contact does not exist they will not have any property! 

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++) {
 if (contacts[x].firstName === name){
  if (contacts[x].hasOwnProperty(prop)) {
    return contacts[x][prop];
  } else {
    return "No such property";
  }
}
}
return "No such contact";



// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");
