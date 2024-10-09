// Create the first student
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Accra"
};

// Create the second student
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    location: "Lagos"
};

// Array containing the students
var studentsList = [student1, student2];

// Create table element
var table = document.createElement("table");

// Add a row for each student
studentsList.forEach(function(student) {
    var row = table.insertRow(); // Create a new row

    var firstNameCell = row.insertCell(0); // Create firstName cell
    var locationCell = row.insertCell(1); // Create location cell

    // Assign values to cells
    firstNameCell.innerText = student.firstName; // Add student's first name to cell
    locationCell.innerText = student.location; // Add student's location to cell
});

// Append the table to the body of the document
document.body.appendChild(table);
