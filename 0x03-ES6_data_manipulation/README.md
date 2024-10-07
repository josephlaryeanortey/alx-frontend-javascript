0x03. ES6 data manipulation 
JavaScript ES6

Resources

Read or watch:

    Array
    Typed Array
    Set Data Structure
    Map Data Structure
    WeakMap

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    How to use map, filter and reduce on arrays
    Typed arrays
    The Set, Map, and Weak link data structures

Requirements

    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using Jest and the command npm run test
    Your code will be verified against lint using ESLint
    Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
    All of your functions must be exported

Tasks
0. Basic list of objects
mandatory

Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

    Guillaume, id: 1, in San Francisco
    James, id: 2, in Columbia
    Serena, id: 5, in San Francisco

bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 


1. More mapping
mandatory

Create a function getListStudentIds that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the map function on the array.

bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 


