// var student1 = "ali";
// var student2 = "farhan";
// var student3 = "asf";
// var student4 = "dasfa";
// student1 = "new stu"

// var students = ["ali", "farhan", "naveed", "asf", "dasfasdf", 234, false, null, 234.234]
// console.log(students);
// students[0] = "new student"
// console.log(students[0]);

// for (var index = 0; index < students.length; index++) {
//     const student = students[index];
//     console.log("student", student);

// }

// write a js program, that input name from user, and check is it exits in array or not?

var students = [];

function addUser() {
    students[students.length] = document.getElementById("userName").value
    printStudents()
}


function findUser() {
    var searchValue = document.getElementById("searchInput").value;
    var result = "not found";
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        if (student == searchValue) {
            result = `user found on index ${index}`
            break;
        }
    }
    document.getElementById("searchResult").innerHTML = result
}



// create an empty array to store values
var myArray = [];

// get the value from the user
var userInput = document.getElementById("searchInput").value;

// add the value to the array
myArray.push(userInput);

// display the array values
console.log(myArray);


function printStudents() {
    console.log('====================================');
    console.log(students);
    console.log('====================================');
}




var studentsNames = ["Umar", "Ali", "Zain"]
var studentsNames1 = ["Umar", "Ali", "Zain"]

// studentsNames[studentsNames.length] = "Naveed"
// studentsNames[studentsNames.length] = "Manzar"

studentsNames.push("Naveed")
// studentsNames.unshift("Manzar")
// studentsNames.unshift(false)
// studentsNames.push(2)
// studentsNames.pop()
// studentsNames.shift()

// studentsNames.splice(2, 0, "sadf")

// studentsNames.splice(studentsNames.length, 0, "Manzar")
// studentsNames.splice(4, 1)

// studentsNames.splice(0, 0, "Manzar")

studentsNames.splice(1, 0, "manzar", "farhan")
studentsNames.splice(2, 0, "farhan")
console.log("studentsNames", studentsNames);

// write a js program, that take input username from form input, and save into start of array, and perform search as well if user search the name
